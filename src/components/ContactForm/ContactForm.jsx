import { nanoid } from 'nanoid';
import { Form, Label, Input, Button} from './ContactForm.styled';
import { useState } from 'react';
import { addContact } from 'redux/contacts/contacts-slice';
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from 'redux/contacts/contacts-selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState = {
  name: '',
  number: '',
}

export const ContactForm = () => {
  const [state, setState] = useState(initialState);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    });
  };
  
  const checkDublicateContact = ({ name, number }) => {
    const resultOfCheck = contacts.find(contact => 
      contact.name===name || contact.number===number
    )
    return resultOfCheck;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkDublicateContact({name, number})) {
      toast.error(`${name} is already in contacts`);
      return;
    }

    const action = addContact({name, number});
    dispatch(action);
    reset()
  };

  const reset = () => {
    setState({
      name: '',
      number: '',
    });
  };

  const { name, number } = state;

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        id={nameInputId}
        onChange={handleChange}
        placeholder="Kate Nicolson"
        required
      />
      <Label htmlFor={numberInputId}>Number</Label>
      <Input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        id={numberInputId}
        onChange={handleChange}
        placeholder='+38095-23-45-567'
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  )
}
