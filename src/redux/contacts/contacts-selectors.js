import { selectFilter } from 'redux/filter/filter-selectors';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = state => {

    const contacts = selectContacts(state);
    const filter = selectFilter(state);

    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name, phone }) => {
        const normalizedName = name.toLocaleLowerCase();
        const resultOfFilter = normalizedName.includes(normalizedFilter) || phone.includes(normalizedFilter);
        return resultOfFilter;
    })
    return filteredContacts;

}
