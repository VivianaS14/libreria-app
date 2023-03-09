import React from "react";
import User from "../components/User/User";

import BtnRegisterBook from "../components/RegisterBook/BtnRegisterBook.jsx";
import {Grid} from "@mui/material";
// import {theme} from "../theme/theme.js";
// import {ThemeProvider} from "@mui/material/styles";
import FormRegisterBook from '../components/RegisterBook/FormRegisterBook';
import FormRegisterService from "../components/RegisterService/FormRegisterService.jsx";
const Perfil = () => {
  return (
      <div className="Perfil">
          <User/>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
              <Grid item xs={2} sm={4} md={4}>
                  <BtnRegisterBook formRegister={<FormRegisterBook />} textTitle="Registrar Libros" />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                  <BtnRegisterBook formRegister={<FormRegisterService />} textTitle="Registrar Servicios"/>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                  <BtnRegisterBook textTitle="Registrar Eventos" />
              </Grid>
          </Grid>
      </div>
  );
};

export default Perfil;
