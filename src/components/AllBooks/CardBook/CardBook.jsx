<<<<<<< HEAD
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
=======
import React from 'react';
import {Box, Button, Card, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import {FavoriteBorder, Book} from '@mui/icons-material/';

const CardBook = ({nameBook, image, status, author, language}) => {

    const [stateHeart, setStateHeart] = React.useState(false);

    const handleHeart = () => {
        setStateHeart(!stateHeart)
    }

    return (
        <Card sx={{ display: 'flex', minHeight:250 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                <CardContent sx={{ flex: '1 0 auto', width:150 }}>
                    <Box sx={{height:100}}>
                        <IconButton onClick={handleHeart}>
                            {stateHeart ? <FavoriteBorder color="secondary"/> : <FavoriteBorder/>}
                        </IconButton>
                        <Typography variant="h5" sx={{fontFamily: 'bold'}}>{nameBook}</Typography>
                    </Box>
                    <Typography >Author: {author}</Typography>
                    {
                        status ? <Typography>Estado: <Typography variant="span" sx={{color: '#00FF00'}}>Disponible
                                </Typography></Typography>:
                            <Typography>Estado: <Typography variant="span" sx={{color: '#FF0000'}}>No disponible
                            </Typography></Typography>

                    }
                    <Typography >Idioma: {language}</Typography>
                    <Button variant="contained"  endIcon={<Book />}>
                        Detalles
                    </Button>

                </CardContent>
                <CardMedia
                    component="img"
                    image={image}
                    sx={{width:135}}
                    alt="book-img"
                />
>>>>>>> 1679e96be41641d3595b23fe619aa8205a965245
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
