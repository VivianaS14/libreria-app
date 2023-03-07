import React from "react";
import "./Details.scss";

const Details = ({
  nameBook,
  image,
  status,
  author,
  description,
  language,
  setModal,
  ...props
}) => {
  return (
    <div {...props} className="details">
      <div className="details__container">
        <button
          className="details__close btn btn-danger"
          onClick={() => setModal(false)}
        >
          X
        </button>
        <img className="details__image" src={image} alt="portada" />
        <div className="details__info">
          <h1>{nameBook}</h1>
          <p>Autor: {author}</p>
          <p>{status}</p>
          <p>{language}</p>
          <p className="details__description">{description}</p>
          <div>
            <button className="btn btn-danger me-2">Close</button>
            <button className="btn btn-info">Intercambiar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
