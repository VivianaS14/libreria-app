import React from "react";
import Events from "../../components/EventsUser/Events";
import MostRead from "../../components/MostRead/MostRead";
import Service from "../../components/ServicesUser/Service";
import InicioContainer from "../../containers/Inicio/InicioContainer";
import "./Inicio.scss";
const Inicio = () => {
  return (
    <div className="Inicio">
      <InicioContainer />
      <Events />
      <MostRead />
      <Service />
    </div>
  );
};

export default Inicio;
