const { createSlice } = require('@reduxjs/toolkit');

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact(state, action) {
      if (
        state.items.find(
          item => item.name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        return alert(
          `Contact "${action.payload.name}" is already in contacts list`
        );
      }
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
