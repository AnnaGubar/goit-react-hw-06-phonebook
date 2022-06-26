import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    // addContact(state, action) {
    //   state.items.push(action.payload);
    // },
    // deleteContact(state, action) {
    //   state.items = state.items.filter(item => item.id !== action.payload);
    // },
    // setFilter(state, action) {
    //   state.filter = action.payload;
    // },
  },
});

export default contactsSlice;
export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
