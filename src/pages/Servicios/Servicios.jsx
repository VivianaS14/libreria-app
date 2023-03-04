import React from "react";
import { Box } from "@mui/material";
import { data } from "./dataServices";
import "./Servicios.scss";

const Servicios = () => {
  return (
    <div className="Servicios">
      <h2>Servicios</h2>
      <p>
        Traemos todo tipo de servicios para que recuperes tus libros que creias
        perdidos.
      </p>
      <div className="Servicios__content">
        {data.map((item) => (
          <Box className="Servicios__item" key={item.id}>
            <h3>{item.service}</h3>
            <hr />
            <p>{item.description}</p>
            <p>{item.nameUser}</p>
            <p>{item.phone}</p>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
