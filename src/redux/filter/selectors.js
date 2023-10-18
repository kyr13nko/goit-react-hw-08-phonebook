import { createSelector } from '@reduxjs/toolkit';
import { getContacts } from 'redux/contacts/selectors';

export const getFilter = state => state.filter.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);
