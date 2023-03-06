import React from "react";
import User from "../components/User/User";

import BtnRegisterBook from "../components/RegisterBook/BtnRegisterBook.jsx";
import {Grid} from "@mui/material";
import {theme} from "../theme/theme.js";
import {ThemeProvider} from "@mui/material/styles";

const Perfil = () => {
  return (
      <div className="Perfil">
          <User/>
          <ThemeProvider theme={theme}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4}>
                      <BtnRegisterBook />
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                      <BtnRegisterBook />
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                      <BtnRegisterBook />
                  </Grid>
              </Grid>
          </ThemeProvider>
      </div>
  );
};

export default Perfil;
