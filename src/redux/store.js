import {configureStore} from '@reduxjs/toolkit';
import {bookSlices} from './reducer/bookSlices';
export const store = configureStore({
    reducer: {
        allBooks: bookSlices.reducer
    }
})