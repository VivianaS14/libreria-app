import {createSlice} from '@reduxjs/toolkit';
import {addBookToUser} from '../actions/action.books';
import {getBooksDate} from '../actions/action.books'
const initialState = {
    allBooks: []
}

const bookSlices = createSlice({
    name: 'books',
    initialState,
    reducers: {
        allBooks: getBooksDate,
        addOneBook: addBookToUser
    }
})

export const {allBooks, addOneBook} = bookSlices.actions
export {bookSlices}