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

const CardBook = ({
  nameBook,
  image,
  status,
  author,
  language,
  description,
  phoneNumber,
}) => {
  const [heart, setHeart] = React.useState(false);
  const [modalDetails, setModalDetails] = useState(false);

  const handleChangue = () => {
    setHeart(!heart);
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          //width: 350,
          height: 300,
          bgcolor: "#fffbf2",
          borderRadius: 3,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <CardContent sx={{ flex: "1 0", width: 200, textAlign: "left" }}>
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
            <Box sx={{ height: 90, width: 220 }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "bold",
                  mt: 1,
                  pl: 2,
                  color: "#9b4819",
                }}
              >
                {nameBook}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-evenly",
                height: 120,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Radley, serif",
                  width: 210,
                  height: 50,
                  overflow: "hidden",
                }}
              >
                Author: {author}
              </Typography>
              <Typography sx={{ fontFamily: "Radley, serif", mb: 1.5 }}>
                Idioma: {language}
              </Typography>
              <Button
                onClick={() => setModalDetails(true)}
                variant="contained"
                color="success"
                sx={{ fontFamily: "Radley, serif" }}
                endIcon={<BookIcon />}
              >
                Detalles
              </Button>
            </Box>
          </CardContent>
          <CardMedia
            component="img"
            image={image}
            sx={{ width: 130 }}
            alt={`Imagen ${nameBook}`}
          />
        </Box>
      </Card>
      {modalDetails && (
        <Details
          author={author}
          image={image}
          language={language}
          nameBook={nameBook}
          description={description}
          status={status}
          setModalDetails={setModalDetails}
          phoneNumber={phoneNumber}
        />
      )}
    </>
  );
};

export default CardBook;
