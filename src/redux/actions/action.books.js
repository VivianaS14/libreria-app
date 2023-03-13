import { addBook } from "../../services/addDataFirestore/addBook";
import { allBooks } from "../reducer/bookSlices";
import { getAllBooks } from "../../services/getDataFiretore/getAllBooks";
import { deleteBook } from "../../services/deleteDataFirestore/deleteBook";

export const addBookToUser = (state, action) => {
  addBook(action.payload);
};
export const getBooks = () => {
  return async function (dispatch) {
    const getDataBooks = await getAllBooks();
    dispatch(allBooks({ allBooks: getDataBooks }));
  };
};
export const getBooksDate = (state, action) => {
  state.allBooks = action.payload.allBooks;
  state.copyAllBooks = action.payload.allBooks;
};
export const filterByLenguaje = (state, action) => {
  state.copyAllBooks = state.allBooks.filter((book) => {
    if (action.payload === "Todos") return state.allBooks;
    else return book.idioma === action.payload;
  });
};
export const filterByGenre = (state, action) => {
  state.copyAllBooks = state.allBooks.filter((book) => {
    if (action.payload === "Todos") return state.allBooks;
    return book.genres.includes(action.payload);
  });
};
export const filterByAuthors = (state, action) => {
  state.copyAllBooks = state.allBooks.filter((book) => {
    if (action.payload === "Todos") return state.allBooks;
    return book.author === action.payload;
  });
};

export const orderByName = (state, action) => {
  switch (action.payload) {
    case "A-Z":
      state.copyAllBooks = state.allBooks.sort((a, b) => {
        if (a.title > b.title) return 1;
        if (b.title > a.title) return -1;
        return 0;
      });
      break;
    case "Z-A":
      state.copyAllBooks = state.allBooks.sort((a, b) => {
        if (a.title < b.title) return 1;
        if (b.title < a.title) return -1;
        return 0;
      });
      break;
    case "reciente":
      state.copyAllBooks = state.allBooks.sort((a, b) => {
        return b.datePublish.slice(0, 4) - a.datePublish.slice(0, 4);
      });
      break;
    default:
      state.copyAllBooks = state.allBooks;
  }
};
export const deleteBooks = (state, action) => {
  deleteBook(action.payload);
};
