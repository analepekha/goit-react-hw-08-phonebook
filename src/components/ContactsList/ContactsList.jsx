import {List} from '../ContactsList/ContactsList.styled'

export const ContactsList = ({ items }) => {
    const elements = items.map(({ name }) => {
        return <li>{ name}</li>
    })
    return (
    <List>{elements}</List>
)
}