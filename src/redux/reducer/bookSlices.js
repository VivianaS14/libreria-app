import {createSlice} from '@reduxjs/toolkit';
import {addBookToUser} from '../actions/action.books';

const initialState = {
    allBooks: []
}

const bookSlices = createSlice({
    name: 'books',
    initialState,
    reducers: {
        allBooks: (state, action) => {
            state.allBooks = action.payload.allBooks
        },
        addOneBook: addBookToUser
    }
})

export const {allBooks, addOneBook} = bookSlices.actions
export {bookSlices}