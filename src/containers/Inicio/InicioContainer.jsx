import React from "react";
import { useNavigate } from "react-router-dom";
import "./InicioContainer.scss";

const InicioContainer = () => {
  const navigate = useNavigate();

  return (
    <div className="Inicio__content">
      <h2>
        Triple <span>AAA!</span>
      </h2>
      <h4>Bienvenidos!, al lugar donde las historias cobran vida.</h4>
      <button type="button" onClick={() => navigate("/intercambiar")}>
        Empezar
      </button>
    </div>
  );
};

export default InicioContainer;
