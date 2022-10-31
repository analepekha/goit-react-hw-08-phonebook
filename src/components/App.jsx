import { Container } from './App.styled';
import { Title} from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from '../redux/contacts/contacts-selectors';
import { getFilter } from '../redux/filter/filter-selectors';
import { addContact, removeContact } from 'redux/contacts/contacts-actions';
import { setFilter } from 'redux/filter/filter-actions';


export function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  
  const onAddContact = (contact) => {
    if (checkDublicateContact(contact)) {
      return alert(`${contact.name} is already in contacts`)
    }
    const action = addContact(contact);
    dispatch(action);
    console.log(action);
  }

  const onRemoveContact = (id) => {
    const action = removeContact(id);
    dispatch(action);
    console.log(action);
  }

  const handleChangeFilter = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
    };

  const checkDublicateContact= ({name, number}) => {
    const resultOfCheck = contacts.find(contact => 
      contact.name===name || contact.number===number
    )
    return resultOfCheck;
  }

  const getFilteredContacts =(e) =>{
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

  const filteredContacts = getFilteredContacts();
  
    return(
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={onAddContact} />
        <Section title={'Contacts'}>
          <Filter value={filter} handleChangeFilter={handleChangeFilter} />
          {contacts.length === 0 ? (<p>Contacts list is empty! Try to add contact</p>) :
            (<ContactsList items={filteredContacts} removeContact={onRemoveContact} />)}
        </Section>
      </Container>
    )
};
