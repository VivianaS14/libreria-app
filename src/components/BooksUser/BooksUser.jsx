import React, { useContext, useEffect, useState } from "react";
import BookItem from "./BookItem/BookItem";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../context/Context";
import { getBooks } from "../../redux/actions/action.books";
import "./BooksUser.scss";

const BooksUser = () => {
  const { statusLogin } = useContext(AppContext);
  const dispatch = useDispatch();
  const dataBooks = useSelector((state) => state.books.copyAllBooks);
  const [userBooks, setUserBooks] = useState([]);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  useEffect(() => {
    setUserBooks(dataBooks.filter((book) => book.userId === statusLogin.uid));
  }, [dataBooks]);

  return (
    <div className="BooksUser">
      <h2>Mis libros</h2>
      <div className="BooksUser__container">
        {userBooks.length >= 1 ? (
          userBooks.map((book) => <BookItem key={book.id} book={book} />)
        ) : (
          <h3>No tienes libros aún.</h3>
        )}
      </div>
    </div>
  );
};

export default BooksUser;
