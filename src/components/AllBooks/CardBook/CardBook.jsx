import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Details from "../../Details/Details";
const CardBook = ({ nameBook, image, status, author, language }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Card sx={{ display: "flex", minHeight: 250 }}>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <CardContent sx={{ flex: "1 0 auto", width: 150 }}>
            <Box sx={{ height: 100 }}>
              <Typography variant="h5" sx={{ fontFamily: "bold" }}>
                {nameBook}
              </Typography>
            </Box>
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
          nameBook={nameBook}
          image={image}
          status={status}
          author={author}
          language={language}
          setModal={setModal}
          modal={modal}
        />
      )}
    </>
  );
};

export default CardBook;
