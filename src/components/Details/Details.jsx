import React, { useContext } from "react";
import { Button } from "@mui/material";
import { AppContext, DispatchAppContext } from "../../context/Context";
import { WhatsApp } from "@mui/icons-material";
import "./Details.scss";

const Details = ({
  nameBook,
  image,
  status = "",
  author,
  description,
  language,
  setModalDetails,
  phoneNumber,
  ...props
}) => {
  const { statusLogin } = useContext(AppContext);
  const { setModal } = useContext(DispatchAppContext);

  return (
    <div {...props} className="details">
      <div className="details__container">
        <img className="details__image" src={image} alt="portada" />
        <div className="details__info">
          <h1>{nameBook}</h1>
          <p>Autor: {author}</p>
          <p>{language}</p>
          <p className="details__description">{description}</p>
          <div className="d-flex">
            <Button
              onClick={() => setModalDetails(false)}
              variant="contained"
              color="error"
              sx={{
                fontFamily: "Radley, serif",
                color: "#fff",
                pl: 3,
                pr: 3,
                mr: 2,
              }}
            >
              Close
            </Button>
            {statusLogin && (
              <Button
                variant="contained"
                color="success"
                sx={{
                  fontFamily: "Radley, serif",
                  color: "#fff",
                  pl: 3,
                  pr: 3,
                }}
                endIcon={<WhatsApp />}
              >
                <a href={`https://wa.me/${phoneNumber}`} target="_blank">
                  Intercambiar
                </a>
              </Button>
            )}
            {!statusLogin && (
              <Button
                onClick={() => setModal(true)}
                variant="contained"
                color="success"
                sx={{
                  fontFamily: "Radley, serif",
                  color: "#fff",
                  pl: 3,
                  pr: 3,
                }}
              >
                Inicia sesión
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
