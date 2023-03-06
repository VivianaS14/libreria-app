import {addBook} from '../../services/addDataFirestore/addBook';

export const addBookToUser = (state, action) => {
    addBook(action.payload)
}