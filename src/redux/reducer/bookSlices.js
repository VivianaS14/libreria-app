import { createSlice } from "@reduxjs/toolkit";
import {
  addBookToUser,
  getBooksDate,
  filterByLenguaje,
  filterByGenre,
  filterByAuthors, orderByName, searchByName,
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
    searchBook: searchByName
  },
});
export const {
  allBooks,
  addOneBook,
  filterLanguage,
  filterGenre,
  filterAuthors,
    orderName,
    searchBook
} = bookSlices.actions;
export { bookSlices };
