import {
    List,
    Item,
    Description,
    Button
} from '../ContactsList/ContactsList.styled';
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from 'redux/contacts/contacts-slice';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

export const ContactsList = () => {

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();


    const onRemoveContact = (id) => {
        const action = removeContact(id);
        dispatch(action);
        console.log(action);
    }

    const getFilteredContacts = () => {
        
        if (!filter) {
          return contacts;
        }

        const normalizedFilter = filter.toLocaleLowerCase();
        const filteredContacts = contacts.filter(({ name, number }) => {
            const normalizedName = name.toLocaleLowerCase();
            const resultOfFilter = normalizedName.includes(normalizedFilter) || number.includes(normalizedFilter);
            return resultOfFilter;
        })
        return filteredContacts;
    }

    const filteredContacts = getFilteredContacts();
    
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
