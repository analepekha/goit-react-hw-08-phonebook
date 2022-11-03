import {
    List,
    Item,
    Description,
    Button
} from '../ContactsList/ContactsList.styled';
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';

export const ContactsList = () => {

    const filteredContacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    const onRemoveContact = (id) => {
        const action = deleteContact(id);
        dispatch(action);
    }
    
    return (
        <List>
            {filteredContacts.map(({ name, phone, id }) => {
                
            return(
                <Item key={id}>
                    <Description> {name}: {phone}</Description>
                    <Button onClick={()=> onRemoveContact(id)}>Delete</Button>
                </Item>)
        })}
        </List>
    )
}
