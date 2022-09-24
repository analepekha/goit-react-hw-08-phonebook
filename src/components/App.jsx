import { Component } from 'react';
// import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import { Title} from './App.styled';
import { FormWrap } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
// import { Formik } from 'formik';


export class App extends Component {
  state = {
    contacts: [],
    
  }

  addContact = contact => {
    // const newContact= {
    //   id: nanoid(),
    //   contact,
    // }
    console.log(contact);

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts ]
    }))
  }

  render() {
    const { contacts } = this.state;
    return(
      <Container>
        <Title>Phonebook</Title>
        <FormWrap addContact={this.addContact} />
        <Title>Contacts</Title>
        <ContactsList items={ contacts} />
      </Container>
    )
  } 
};
