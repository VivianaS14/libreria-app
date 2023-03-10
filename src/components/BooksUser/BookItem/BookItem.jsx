import React from "react";
import {
  Divider,
  ImageListItem,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const BookItem = () => {
  return (
    <>
      <ListItem>
        <div sx={{ marginRight: 3 }}>
          <img
            src="https://m.media-amazon.com/images/P/B0BGFHKJP6.01._SCLZZZZZZZ_SX500_.jpg"
            srcSet="https://m.media-amazon.com/images/P/B0BGFHKJP6.01._SCLZZZZZZZ_SX500_.jpg"
            alt="Book title"
            loading="lazy"
            width="180"
          />
        </div>
        <ListItemText
          sx={{ fontFamily: "Radley, serif" }}
          primary="Brunch this weekend?"
          secondary={
            <>
              <Typography
                sx={{ display: "inline", marginTop: 2 }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default BookItem;
