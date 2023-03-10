import React, { useContext } from "react";
import { AppContext, DispatchAppContext } from "../../context/Context";
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
  const {setModal}=useContext(DispatchAppContext);


    
  

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
            <button
              onClick={() => setModalDetails(false)}
              className="btn btn-danger me-2"
              >
              Close
            </button>
            {statusLogin && (
              <a
              className="btn btn-success"
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              >
                Intercambiar
              </a>
            )}
            {!statusLogin && <button className="btn btn-success" onClick={()=>setModal(true)} >Inicia sesión</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
