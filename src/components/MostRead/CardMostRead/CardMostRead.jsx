import React, { useContext, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import Details from "../../Details/Details";


const CardMostRead = ({
  nameBook,
  image,
  score,
  author,
  state,
  description,
  language,
  phoneNumber,
}) => {

  const [modalDetails, setModalDetails] = useState(false);
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="280"
        image={image}
        sx={{ objectFit: "fill" }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Radley, serif",
        }}
      >
        <Typography variant="span" sx={{ fontSize: 20, color: "#9b4819" }}>
          {nameBook}
        </Typography>
        <Typography variant="span">{author}</Typography>
        <Rating name="read-only" value={4} readOnly />
      </CardContent>
      <Button
      sx={{margin:1}}
        onClick={() => setModalDetails(true)}
        variant="contained"
        endIcon={<BookIcon />}
      >
        Detalles
      </Button>
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
    </Card>
  );
};

export default CardMostRead;
