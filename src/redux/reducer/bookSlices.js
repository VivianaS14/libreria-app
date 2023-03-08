import {createSlice} from '@reduxjs/toolkit';
import {addBookToUser, getBooksDate, filterByLenguaje} from '../actions/action.books';

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
        filterLanguage: filterByLenguaje
    }
})
export const {allBooks, addOneBook, filterLanguage} = bookSlices.actions
export {bookSlices}