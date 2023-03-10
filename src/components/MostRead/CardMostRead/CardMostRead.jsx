import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
const CardMostRead = ({ nameBook, image, score, author }) => {
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
        <Rating name="read-only" value="4" readOnly />
      </CardContent>
    </Card>
  );
};

export default CardMostRead;
