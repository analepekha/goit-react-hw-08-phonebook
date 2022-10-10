import PropTypes from 'prop-types';
import {
    List,
    Item,
    Description,
    Button
} from '../ContactsList/ContactsList.styled'

export const ContactsList = ({ filteredContacts, removeContact}) => {
    return (
        <List>
            {filteredContacts.map(({ name, number, id }) => {
            return(
                <Item key={id}>
                    <Description> {name}: {number}</Description>
                    <Button onClick={()=> removeContact(id)}>Delete</Button>
                </Item>)
        })}
        </List>
    )
}

ContactsList.propTypes = {
    filteredContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeContact: PropTypes.func.isRequired,
}