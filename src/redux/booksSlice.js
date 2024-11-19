import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: [],
  reducers: {
    addBook: (state, action) => {
    //   console.log("action", action.payload);
    //   state.push({id: Date.now(), name: action.payload.name, author: action.payload.author})
    state.push(action.payload); 
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
