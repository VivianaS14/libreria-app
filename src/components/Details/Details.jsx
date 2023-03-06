import React from "react";
import './Details.scss'

const Details = ({ nameBook, image, status, author, language,setModal, modal, ...props }) => {
    console.log(modal)
  return (
    <div {...props} className="details">
      <div>
        <button onClick={()=> setModal(modal?false:true)} >X</button>
        <img src={image} alt="portada" />
        <h1>{nameBook}</h1>
        <p>Autor: {author}</p>
        <p>{status}</p>
        <p>{language}</p>
      </div>
    </div>
  );
};

export default Details;
