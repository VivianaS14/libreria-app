import React from "react";
import Login from "../components/Login/Login";
import MostRead from "../components/MostRead/MostRead";
import Service from "../components/ServicesUser/Service";

const Inicio = () => {
  return (
    <div>
      <div className="Inicio">
        <h1>Soy el inicio</h1>
        <Login />
        <MostRead />
        <Service />
      </div>
    </div>
  );
};

export default Inicio;
