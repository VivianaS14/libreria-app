import {configureStore} from '@reduxjs/toolkit';
import {bookSlices} from './reducer/bookSlices';
export const store = configureStore({
    reducer: {
        books: bookSlices.reducer
    }
})