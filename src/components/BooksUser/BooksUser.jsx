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
    console.log(userBooks);
  }, [dataBooks]);

  return (
    <div className="BooksUser">
      <h2>Mis libros</h2>
      <List
        sx={{
          width: "100%",
          maxWidth: 450,
          bgcolor: "#f4f1e8",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {userBooks.length >= 1 ? (
          userBooks.map((book) => <BookItem book={book} />)
        ) : (
          <Loading />
        )}
      </List>
    </div>
  );
};

export default BooksUser;
