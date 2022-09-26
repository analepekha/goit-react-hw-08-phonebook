import { Component } from 'react';
import { Container } from './App.styled';
import { Title} from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  addContact = contact => {
    console.log(contact);
    if (this.checkDublicateContact(contact)) {
      return alert(`${contact.name} is already in contacts`)
    }
    const newContact = {
      id: nanoid(),
      ...contact,
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts ]
    }))
  }

  removeContact=(id) =>{
    this.setState(prevState => {
      const newContact = prevState.contacts.filter(((item) => item.id !== id))
      return {
        contacts: newContact
      }
    })
  }

  handleChangeFilter = e => {
        const {name, value} = e.currentTarget
        this.setState({[name]: value})
    };

  findContact () {
    const { contacts, filter } = this.state;
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

  checkDublicateContact({name, number}) {
    const { contacts } = this.state;
    const resultOfCheck = contacts.find(contact => 
      contact.name===name || contact.number===number
    )
    return resultOfCheck;
  }

  render() {
    const { filter } = this.state;
    const { addContact, handleChangeFilter, removeContact } = this;
    const filteredContacts = this.findContact();
    return(
      <Container>
        <Title>Phonebook</Title>
        <ContactForm addContact={addContact} />
        <Section title={'Contacts'}>
          <Filter value={filter} handleChangeFilter={handleChangeFilter} />
          <ContactsList filteredContacts={filteredContacts} removeContact={removeContact} />
        </Section>
      </Container>
    )
  } 
};
