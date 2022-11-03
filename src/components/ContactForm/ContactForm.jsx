import { nanoid } from 'nanoid';
import { Form, Label, Input, Button} from './ContactForm.styled';
import { useState } from 'react';
import { addContact } from 'redux/contacts/contacts-operations';
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setPhone(value);
      default:
        return;
    }
  };
  
  const checkDublicateContact = ({ name, phone }) => {
    const resultOfCheck = contacts.find(contact => 
      contact.name===name || contact.phone===phone
    )
    return resultOfCheck;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkDublicateContact({name, phone})) {
      toast.error(`${name} is already in contacts`);
      reset();
      return;
    }
    const action = addContact({name, phone});
    dispatch(action);
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };


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
        value={phone}
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
