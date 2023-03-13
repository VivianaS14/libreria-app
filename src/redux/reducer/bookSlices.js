import { createSlice } from "@reduxjs/toolkit";
import {
  addBookToUser,
  getBooksDate,
  filterByLenguaje,
  filterByGenre,
  filterByAuthors,
  orderByName,
  deleteBooks,
} from "../actions/action.books";

const initialState = {
  allBooks: [],
  copyAllBooks: [],
};
const bookSlices = createSlice({
  name: "books",
  initialState,
  reducers: {
    allBooks: getBooksDate,
    addOneBook: addBookToUser,
    filterLanguage: filterByLenguaje,
    filterGenre: filterByGenre,
    filterAuthors: filterByAuthors,
    orderName: orderByName,
    deleteBook: deleteBooks,
  },
});
export const {
  allBooks,
  addOneBook,
  filterLanguage,
  filterGenre,
  filterAuthors,
  orderName,
  deleteBook,
} = bookSlices.actions;
export { bookSlices };
