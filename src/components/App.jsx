import { Container, Title, Wrapper, DefaultText} from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { Loader } from './Loader/Loader';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { selectContacts, selectError, selectIsLoading } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function App() {
  const contacts = useSelector(selectContacts);
  console.log(contacts.length);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
      <Container>
        <Wrapper>
          <Title>Phonebook</Title>
          <ContactForm />
        </Wrapper>
        <Section title={'Contacts'}>
          <Filter />
          {isLoading  && <Loader/>}
          {contacts.length === 0 && (<DefaultText>Contacts list is empty! Try to add contact</DefaultText>)} 
          {!isLoading && contacts.length > 0 && < ContactsList />}
          {error && <p>Ooops... Something went wrong</p>}
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
