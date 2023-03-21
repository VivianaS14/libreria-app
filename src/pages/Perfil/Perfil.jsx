import React, { useContext } from "react";
import User from "../../components/User/User";
import BtnRegisterBook from "../../components/RegisterBook/BtnRegisterBook.jsx";
import FormRegisterBook from "../../components/RegisterBook/FormRegisterBook";
import FormRegisterService from "../../components/RegisterService/FormRegisterService.jsx";
import BooksUser from "../../components/BooksUser/BooksUser";
import { AppContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import "./Perfil.scss";
import ServiceUser from "../../components/ServiceUser/ServiceUser";

const Perfil = () => {
  const { statusLogin } = useContext(AppContext);
  const navigate = useNavigate();

  if (!statusLogin) return <h1>Inicie sesión para navegar</h1>;

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
      </div>
      <BooksUser />
      <ServiceUser />
    </div>
  );
};

export default Perfil;
