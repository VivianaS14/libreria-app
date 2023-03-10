import React, { useContext, useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CardMostRead from "./CardMostRead/CardMostRead";
import { getBooks } from "../../redux/actions/action.books";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./MostRead.scss";
import { DispatchAppContext } from "../../context/Context";

const MostRead = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataBooks = useSelector((state) => state.books.allBooks);
  const [mostRead, setMostRead] = useState([]);
  

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  useEffect(() => {
    setMostRead(dataBooks.slice(1, 7));
  }, [dataBooks]);
  return (
    <Container
      maxWidth="xl"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 10,
          mt: 10,
          fontFamily: "Radley, serif",
          fontSize: 48,
          color: "#9b4819",
        }}
      >
        Lo mas leído
      </Typography>
      <Grid maxWidth="lg" container columns={{ xs: 4, sm: 10, md: 12 }}>
        {mostRead.length >= 1 ? (
          mostRead.map((card) => (
            <Grid
              item
              sx={{ mb: 7, pl: 1, pr: 1 }}
              xs={2}
              sm={4}
              md={4}
              key={card.id}
            >
              <CardMostRead
                nameBook={card.title}
                image={card.image}
                score={card.score}
                author={card.author}
                state={card.state}
                description={card.description}
                languages={card.languages}
                phoneNumber={card.phone}
              />
            </Grid>
          ))
        ) : (
          <Loading />
        )}
      </Grid>
      <button
        className="btn-mostRead"
        type="button"
        onClick={() => navigate("/intercambiar")}
      >
        Ver mas
      </button>
    </Container>
  );
};

export default MostRead;
