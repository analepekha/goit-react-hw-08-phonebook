import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { IconButton, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';

export const ContactsList = () => {

    const filteredContacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    const onRemoveContact = (id) => {
        const action = deleteContact(id);
        dispatch(action);
    }
    
    return (
        <List sx={{width:'400px'}}>
            {filteredContacts.map(({ name, number, id }) => {
                
            return(
                <ListItem key={id} sx={{p:0}}>
                    <ListItemIcon sx={{ fontSize: 30,  }}>
                        <PhoneInTalkOutlinedIcon color='primary'/>
                    </ListItemIcon>
                    <Typography component='div' sx={{mr:'auto'}}> {name}: {number}</Typography>
                    <IconButton edge="end" aria-label="delete" onClick={() => onRemoveContact(id)}>
                        <DeleteForeverIcon color='primary' />
                    </IconButton>
                </ListItem>)
        })}
        </List>
    )
}
