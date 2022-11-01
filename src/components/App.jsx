import { Container, Title, Wrapper, DefaultText} from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from '../redux/contacts/contacts-selectors';
import { getFilter } from '../redux/filter/filter-selectors';
import { addContact, removeContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  
  const onAddContact = (contact) => {
    if (checkDublicateContact(contact)) {
      toast.error(`${contact.name} is already in contacts`);
      return;
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
        <Wrapper>
          <Title>Phonebook</Title>
          <ContactForm onSubmit={onAddContact} />
        </Wrapper>
        <Section title={'Contacts'}>
          <Filter value={filter} handleChangeFilter={handleChangeFilter} />
          {contacts.length === 0 ? (<DefaultText>Contacts list is empty! Try to add contact</DefaultText>) :
            (<ContactsList items={filteredContacts} removeContact={onRemoveContact} />)}
        </Section>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover
          theme="light"
        />
      </Container>
    )
};
