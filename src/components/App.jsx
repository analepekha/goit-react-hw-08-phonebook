import { Container, Title, Wrapper, DefaultText} from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { useSelector } from "react-redux";
import { getContacts } from '../redux/contacts/contacts-selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function App() {
  const contacts = useSelector(getContacts);
  
  return (
      <Container>
        <Wrapper>
          <Title>Phonebook</Title>
          <ContactForm />
        </Wrapper>
        <Section title={'Contacts'}>
          <Filter />
          {contacts.length === 0 ? (<DefaultText>Contacts list is empty! Try to add contact</DefaultText>) :
            (<ContactsList />)}
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
