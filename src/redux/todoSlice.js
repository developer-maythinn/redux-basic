import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
       state.push({ id: Date.now(), text: action.payload });
    },
    deleteItem: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});
export const { addItem, deleteItem } = todoSlice.actions;
export default todoSlice.reducer;
