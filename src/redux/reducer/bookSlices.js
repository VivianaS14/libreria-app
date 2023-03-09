import {createSlice} from '@reduxjs/toolkit';
import {
    addBookToUser,
    getBooksDate,
    filterByLenguaje,
    filterByGenre,
    filterByAuthors
} from '../actions/action.books';

const initialState = {
    allBooks: [],
    copyAllBooks: []
}
const bookSlices = createSlice({
    name: 'books',
    initialState,
    reducers: {
        allBooks: getBooksDate,
        addOneBook: addBookToUser,
        filterLanguage: filterByLenguaje,
        filterGenre: filterByGenre,
        filterAuthors: filterByAuthors
    }
})
export const {
    allBooks,
    addOneBook,
    filterLanguage,
    filterGenre,
    filterAuthors} = bookSlices.actions
export {bookSlices}