import { getFilter } from 'redux/filter/filter-selectors';

export const getContacts = state => state.contacts;

export const getFilteredContacts = state => {

    const contacts = getContacts(state);
    const filter = getFilter(state);

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
