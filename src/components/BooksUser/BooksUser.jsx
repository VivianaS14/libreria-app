import React, { useContext, useEffect, useState } from "react";
import { List } from "@mui/material";
import BookItem from "./BookItem/BookItem";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../context/Context";
import { getBooks } from "../../redux/actions/action.books";
import Loading from "../Loading/Loading";
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
          userBooks.map((book,index) => <BookItem key={index} book={book} />)
        ) : (
          <h3>No hay libros aun...</h3>
        )}
      </div>
    </div>
  );
};

export default BooksUser;
