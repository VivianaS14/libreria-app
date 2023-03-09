import React from "react";
import { Route, Routes } from "react-router-dom";
import Contenedor from "../containers/Contenedor";
import Inicio from "../pages/Inicio/Inicio";
import Intercambiar from "../pages/Intercambiar/Intercambiar";
import Servicios from "../pages/Servicios/Servicios";
import Perfil from "../pages/Perfil/Perfil";
import NotFound from "../components/NotFound/NotFound";
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
