import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import todoReducer from "./todoSlice";
import booksReducer from "./booksSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todos: todoReducer,
    books: booksReducer,
  },
});
