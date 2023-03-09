import {addBook,} from '../../services/addDataFirestore/addBook';
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
    state.copyAllBooks = action.payload.allBooks
}
export const filterByLenguaje = (state, action) => {
    state.copyAllBooks = state.allBooks.filter(book => {
        if (action.payload === 'Todos') return state.allBooks
        else return book.idioma === action.payload
    })
}
export const filterByGenre = (state, action) => {
    state.copyAllBooks = state.allBooks.filter(book => {
        if (action.payload === 'Todos') return state.allBooks
        return book.genres.includes(action.payload)
    })
}
export const filterByAuthors = (state, action) => {
    state.copyAllBooks = state.allBooks.filter(book => {
        if (action.payload === 'Todos') return state.allBooks
        return book.author === action.payload
    })
}