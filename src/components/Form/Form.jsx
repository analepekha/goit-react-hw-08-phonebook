import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { Form, Label, Input, Button} from '../App.styled';


export class FormWrap extends Component {
    state = {
        name: ''
    }

    nameInputId = nanoid();

    handleChange = e => {
        const {name, value} = e.currentTarget
        this.setState({[name]: value})
    };
    
    handleSubmit = e => {
        e.preventDefault();
        const { name } = this.state
        this.props.addContact({name});
        this.reset();
    };

    reset = () => {
        this.setState({
          name:'',
        });
    };
    
    render() {
        const { name } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
          <Label htmlFor={this.nameInputId}>Name</Label>
            <Input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              id={this.nameInputId}
              onChange={this.handleChange}
              required
            />
          <Button type="submit">Add contact</Button>
        </Form>
        )
    }
}

FormWrap.propTypes = {
    addContact: PropTypes.func.isRequired,
}