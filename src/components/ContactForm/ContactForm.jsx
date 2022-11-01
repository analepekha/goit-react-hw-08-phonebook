import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button} from './ContactForm.styled';
import { useState } from 'react';


const initialState = {
  name: '',
  number: '',
}

export const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState(initialState);
  
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = state;
    onSubmit({ name, number });
    reset();
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

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}