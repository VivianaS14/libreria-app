import React from "react";
import { Button, ListItem, ListItemText, Typography } from "@mui/material";

const BookItem = ({ book }) => {
  const { author, image, title, description } = book;

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
              <Button variant="contained" color="error" sx={{ marginTop: 2 }}>
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
