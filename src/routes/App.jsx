import React from "react";
import { Route, Routes } from "react-router-dom";
import Contenedor from "../containers/Contenedor";
import Inicio from "../pages/Inicio/Inicio";
import Intercambiar from "../pages/Intercambiar";
import Servicios from "../pages/Servicios/Servicios";
import Perfil from "../pages/Perfil";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Contenedor />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/intercambiar" element={<Intercambiar />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/perfil" element={<Perfil />} />
        </Route>
        <Route path="*" element={<h1>Error: Pagina no encontrada</h1>} />
      </Routes>
    </div>
  );
};

export default App;
