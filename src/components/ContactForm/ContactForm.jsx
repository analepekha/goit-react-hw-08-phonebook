import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button} from './ContactForm.styled';
import { useState } from 'react';

const initialState = {
  name: '',
  number: '',
}
export const ContactForm = ({addContact}) => {
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
    
  const handleSubmit = e => {
    const { name, number } = state;
        addContact({name, number});
        reset();
    };

  const reset = () => {
        setState({
          name: '',
          number: '',
        });
    };

        return (
            <Form onSubmit={handleSubmit}>
              <Label htmlFor={nameInputId}>Name</Label>
              <Input
                type="text"
                name="name"
                value={state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                id={nameInputId}
                onChange={handleChange}
                required
                />
            <Label htmlFor={numberInputId}>Number</Label>
            <Input
              type="tel"
              name="number"
              value={state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              id={numberInputId}
              onChange={handleChange}
              required
            />
              <Button type="submit">Add contact</Button>
            </Form>
        )
    }

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
}