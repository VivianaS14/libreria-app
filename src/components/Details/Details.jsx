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
        <img className="details__image" src={image} alt="portada" />
        <div className="details__info">
          <h1>{nameBook}</h1>
          <p>Autor: {author}</p>
          <p>{language}</p>
          <p className="details__description">{description}</p>
          <div>
            <button
              onClick={() => setModal(false)}
              className="btn btn-danger me-2"
            >
              Close
            </button>
            <button className="btn btn-success">Intercambiar</button>
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default Details;
