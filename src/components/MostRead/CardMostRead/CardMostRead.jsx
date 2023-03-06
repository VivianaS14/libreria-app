import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
const CardMostRead = ({ nameBook, image, score }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
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
        <Typography variant="span">{nameBook}</Typography>
        <Rating name="read-only" value={score} readOnly />
      </CardContent>
    </Card>
  );
};

export default CardMostRead;
