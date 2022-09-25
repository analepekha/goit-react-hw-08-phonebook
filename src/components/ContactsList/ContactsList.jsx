import {List} from '../ContactsList/ContactsList.styled'

export const ContactsList = ({ items }) => {
    const elements = items.map(({ name, number, id }) => {
        return <li key={id}>{name}: {number}</li>
    })
    return (
    <List>{elements}</List>
)
}