import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },

    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

// const persistConfig = {
//   key: 'items',
//   storage,
//   whitelist: ['items'],
// };

// export const contactsRedusers = persistReducer(
//   persistConfig,
//   contactSlice.reducer
// );

export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;
