import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Details from "../../Details/Details";

const CardBook = ({ nameBook, image, status, author, language,description }) => {
  const [heart, setHeart] = React.useState(false);
  const [modal, setModal] = useState(false);

  const handleChangue = () => {
    setHeart(!heart);
  };

  return (
    <>
      <Card sx={{ display: "flex", minHeight: 250 }}>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <CardContent sx={{ flex: "1 0 auto", width: 150, textAlign: "left" }}>
            <IconButton
              aria-label="heart"
              onClick={handleChangue}
              sx={{ textAlign: "left" }}
            >
              {heart ? (
                <FavoriteBorderIcon color="secondary" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            <Box sx={{ height: 80 }}>
              <Typography
                variant="h5"
                sx={{ fontFamily: "bold", mt: 1, pl: 2 }}
              >
                {nameBook}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography>Author: {author}</Typography>
              {status ? (
                <Typography>
                  Estado:{" "}
                  <Typography variant="span" sx={{ color: "#00FF00" }}>
                    Disponible
                  </Typography>
                </Typography>
              ) : (
                <Typography>
                  Estado:{" "}
                  <Typography variant="span" sx={{ color: "#FF0000" }}>
                    No disponible
                  </Typography>
                </Typography>
              )}
              <Typography>Idioma: {language}</Typography>
              <Button
                onClick={() => setModal(true)}
                variant="contained"
                endIcon={<BookIcon />}
              >
                Detalles
              </Button>
            </Box>
          </CardContent>
          <CardMedia
            component="img"
            image={image}
            sx={{ width: 135 }}
            alt="book-img"
          />
        </Box>
      </Card>
      {modal && (
        <Details
          author={author}
          image={image}
          language={language}
          nameBook={nameBook}
          description={description}
          status={status}
          setModal={setModal}
        />
      )}
    </>
  );
};

export default CardBook;
