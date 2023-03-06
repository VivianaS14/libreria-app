import React from "react";
import User from "../components/User/User";
//import FormRegisterBook from "../components/RegisterBook/FormRegisterBook.jsx";
import BtnRegisterBook from "../components/RegisterBook/BtnRegisterBook.jsx";
import {Grid} from "@mui/material";

const Perfil = () => {
  return (
    <div>
      <div className="Perfil">
        <User/>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
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

      </div>
    </div>
  );
};

export default Perfil;
