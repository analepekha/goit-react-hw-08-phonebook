import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { Form, Label, Input, Button} from './ContactForm.styled';


export class ContactForm extends Component {
    state = {
      name: '',
      number: ''
    }

  nameInputId = nanoid();
  numberInputId = nanoid();

    handleChange = e => {
        const {name, value} = e.currentTarget
        this.setState({[name]: value})
    };
    
    handleSubmit = e => {
        e.preventDefault();
        const { name, number } = this.state
        this.props.addContact({name, number});
        this.reset();
    };

    reset = () => {
        this.setState({
          name: '',
          number: '',
        });
    };
    
    render() {
      const { name, number } = this.state;
      const { handleSubmit, handleChange} = this;

        return (
            <Form onSubmit={handleSubmit}>
              <Label htmlFor={this.nameInputId}>Name</Label>
              <Input
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                id={this.nameInputId}
                onChange={handleChange}
                required
                />
            <Label htmlFor={this.numberInputId}>Number</Label>
            <Input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              id={this.numberInputId}
              onChange={handleChange}
              required
            />
              <Button type="submit">Add contact</Button>
            </Form>
        )
    }
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
}