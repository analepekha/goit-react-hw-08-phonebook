import PropTypes from 'prop-types';
import {
    List,
    Item,
    Description,
    Button
} from '../ContactsList/ContactsList.styled'

export const ContactsList = ({ items, removeContact }) => {
    return (
        <List>
            {items.map(({ name, number, id }) => {
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
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    removeContact: PropTypes.func.isRequired,
}