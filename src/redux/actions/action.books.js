import {addBook, } from '../../services/addDataFirestore/addBook';
import {allBooks} from '../reducer/bookSlices';
import {getAllBooks} from '../../services/getDataFiretore/getAllBooks';

export const addBookToUser = (state, action) => {
    addBook(action.payload)
}
export const getBooks = () => {
    return async function(dispatch) {
        const getDataBooks = await getAllBooks();
        dispatch(allBooks({allBooks: getDataBooks}))
    }
}

export const getBooksDate =  (state, action) => {
    state.allBooks = action.payload.allBooks
}