import React from "react";
import MostRead from "../../components/MostRead/MostRead";
import Service from "../../components/ServicesUser/Service";
import InicioContainer from "../../containers/Inicio/InicioContainer";
import "./Inicio.scss";

const Inicio = () => {
  return (
    <div className="Inicio">
      <InicioContainer />
      <MostRead />
      <Service />
    </div>
  );
};

export default Inicio;
