import React, { useContext } from "react";
import { Button, ListItem, ListItemText, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../../redux/reducer/bookSlices";
import { DispatchAppContext } from "../../../context/Context";
import { getBooks } from "../../../redux/actions/action.books";

const BookItem = ({ book }) => {
  const { author, image, title, description, id } = book;
  const { setAlert } = useContext(DispatchAppContext)
  const dispatch = useDispatch();

  const handelDelete = () => {
    dispatch(deleteBook(id))
    setAlert({ type: "success", message: "Libro Eliminado" });
    dispatch(getBooks())
  }

  return (
    <>
      <ListItem>
        <div sx={{ marginRight: 3 }}>
          <img
            src={image}
            srcSet={image}
            alt={title}
            loading="lazy"
            width="180"
            height="260"
          />
        </div>
        <ListItemText
          sx={{ fontFamily: "Radley, serif" }}
          primary={title}
          secondary={
            <>
              <Typography
                sx={{ marginTop: 2, display: "flex" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {author}
              </Typography>{" "}
              <Button variant="contained" color="error" sx={{ marginTop: 2 }} onClick={handelDelete}>
                Eliminar
              </Button>
            </>
          }
        />
      </ListItem>
    </>
  );
};

export default BookItem;
