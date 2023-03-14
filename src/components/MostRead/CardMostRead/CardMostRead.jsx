import React, { useContext, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import Details from "../../Details/Details";

const CardMostRead = ({
  nameBook,
  image,
  author,
  description,
  language,
  phoneNumber,
}) => {
  const [modalDetails, setModalDetails] = useState(false);
  return (
    <Card sx={{ maxWidth: 300, bgcolor: "#fffbf2", m: "auto" }}>
      <CardMedia
        component="img"
        height="290"
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
        <Typography variant="span" sx={{ fontSize: 25, color: "#9b4819" }}>
          {nameBook}
        </Typography>
        <Typography variant="span">{author}</Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ backgroundColor: "#16794b", mb: 2 }}
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
      </CardActions>
    </Card>
  );
};

export default CardMostRead;
