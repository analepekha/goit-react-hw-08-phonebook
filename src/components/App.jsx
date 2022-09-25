import { Component } from 'react';
// import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import { Title} from './App.styled';
import { FormWrap } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
// import { Formik } from 'formik';


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
    const newContact = {
      id: nanoid(),
      ...contact,
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts ]
    }))
  }

  findContact = data => {
    console.log(data);
  }

  render() {
    const { contacts } = this.state;
    return(
      <Container>
        <Title>Phonebook</Title>
        <FormWrap addContact={this.addContact} />
        <Title>Contacts</Title>
        <Filter findContact={ this.findContact} />
        <ContactsList items={ contacts} />
      </Container>
    )
  } 
};
