import {configureStore} from '@reduxjs/toolkit';
import {bookSlices} from './reducer/bookSlices';
import {serviceSlices} from './reducer/serviceSlices';
export const store = configureStore({
    reducer: {
        books: bookSlices.reducer,
        services: serviceSlices.reducer
    }
})