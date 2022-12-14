import { nanoid } from 'nanoid';
import { useState } from 'react';
import { addContact } from 'redux/contacts/contacts-operations';
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Button, TextField } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
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
        return setNumber(value);
      default:
        return;
    }
  };
  
  const checkDublicateContact = ({ name, number }) => {
    const resultOfCheck = contacts.find(contact => 
      contact.name===name || contact.phone===number
    )
    return resultOfCheck;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkDublicateContact({ name, number })) {
      toast.error(`${name} is already in contacts`);
      reset();
      return 
    }
    const action = addContact({name, number});
    dispatch(action);
    reset();
  };


  const reset = () => {
    setName('');
    setNumber('');
  };


  return (
    <>
    <Box component='form' sx={{ display: 'flex', flexDirection: 'column', }} onSubmit={handleSubmit}>
      <TextField
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        id={nameInputId}
        onChange={handleChange}
        placeholder="Kate Nicolson"
        required
        label='Name'
        margin="dense"
      />
      <TextField
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        id={numberInputId}
        onChange={handleChange}
        placeholder='+38095-23-45-567'
        required
        label='Number'
        margin="dense"
        />
        <Button type="submit" variant="contained" sx={{display:'flex', width:'165px', mr:'auto', ml:'auto', mt:1}} startIcon={<AddCircleOutlinedIcon/>} >Add contact</Button>
      </Box>
    </>
  )
}
