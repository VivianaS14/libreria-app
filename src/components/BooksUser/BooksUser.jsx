import React from "react";
import { List } from "@mui/material";
import BookItem from "./BookItem/BookItem";
import "./BooksUser.scss";

const BooksUser = () => {
  return (
    <div className="BooksUser">
      <h2>Mis libros</h2>
      <List
        sx={{
          width: "100%",
          maxWidth: 400,
          bgcolor: "#f4f1e8",
          margin: "auto",
        }}
      >
        <BookItem />
      </List>
    </div>
  );
};

export default BooksUser;
