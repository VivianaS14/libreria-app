import {createSlice} from '@reduxjs/toolkit';
import {
    addBookToUser,
    getBooksDate,
    filterByLenguaje, filterByGenre} from '../actions/action.books';

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
        filterGenre: filterByGenre
    }
})
export const {allBooks, addOneBook, filterLanguage, filterGenre} = bookSlices.actions
export {bookSlices}