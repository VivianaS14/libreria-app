import React from "react";
import User from "../../components/User/User";
import BtnRegisterBook from "../../components/RegisterBook/BtnRegisterBook.jsx";
import FormRegisterBook from "../../components/RegisterBook/FormRegisterBook";
import FormRegisterService from "../../components/RegisterService/FormRegisterService.jsx";
import "./Perfil.scss";

const Perfil = () => {
  return (
    <div className="Perfil">
      <User />
      <div className="Perfil__formularios">
        <div className="Perfil__form">
          <BtnRegisterBook
            formRegister={<FormRegisterBook />}
            textTitle="Registrar Libros"
            sx={{ color: "#f4f1e8" }}
          />
        </div>
        <div className="Perfil__form">
          <BtnRegisterBook
            formRegister={<FormRegisterService />}
            textTitle="Registrar Servicios"
          />
        </div>

        {/* <Grid item xs={2} sm={4} md={4}>
            <BtnRegisterBook textTitle="Registrar Eventos" />
          </Grid> */}
      </div>
    </div>
  );
};

export default Perfil;
