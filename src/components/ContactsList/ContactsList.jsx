import {
    List,
    Item,
    Description,
    Button
} from '../ContactsList/ContactsList.styled';
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from 'redux/contacts/contacts-slice';
import { getFilteredContacts} from 'redux/contacts/contacts-selectors';

export const ContactsList = () => {

    const filteredContacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();

    const onRemoveContact = (id) => {
        const action = removeContact(id);
        dispatch(action);
        console.log(action);
    }
    
    return (
        <List>
            {filteredContacts.map(({ name, number, id }) => {
            return(
                <Item key={id}>
                    <Description> {name}: {number}</Description>
                    <Button onClick={()=> onRemoveContact(id)}>Delete</Button>
                </Item>)
        })}
        </List>
    )
}
