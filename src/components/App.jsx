import { Container } from './App.styled';
import { Title} from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

export function App() {
  const [contacts, setContacts] = useState(() => {
    const value = JSON.parse(localStorage.getItem('contacts'));
    return value ?? []
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const addContact = (contact) => {
    if (checkDublicateContact(contact)) {
      return alert(`${contact.name} is already in contacts`)
    }
    setContacts((prevState) => {
      const newContact = {
          id: nanoid(),
          ...contact
      }
      return [...prevState, newContact]
    })
  }

  const removeContact = (id) => {
    setContacts(prevState => {
      const newContact = prevState.filter(((item) => item.id !== id))
      return newContact;
    })
  }

  const handleChangeFilter = e => {
    const { value } = e.currentTarget
    setFilter(value);
    };

  const findContact =() =>{
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const resultOfFilter = normalizedName.includes(normalizedFilter) || number.includes(normalizedFilter);
      return resultOfFilter;
    })
    return filteredContacts;
  }

  const checkDublicateContact= ({name, number}) => {
    const resultOfCheck = contacts.find(contact => 
      contact.name===name || contact.number===number
    )
    return resultOfCheck;
  }
  const filteredContacts = findContact();
  
    return(
      <Container>
        <Title>Phonebook</Title>
        <ContactForm addContact={addContact} />
        <Section title={'Contacts'}>
          <Filter value={filter} handleChangeFilter={handleChangeFilter} />
          {contacts.length === 0 ? (<p>Contacts list is empty! Try to add contact</p>) :
          (<ContactsList filteredContacts={filteredContacts} removeContact={removeContact} />)}
        </Section>
      </Container>
    )
};
