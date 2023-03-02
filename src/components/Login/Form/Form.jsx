import React, { useContext, useState } from "react";
import { DispatchAppContext } from "../../../context/Context";
import InputForm from "../InputForm/InputForm";
import PhotoUser from "../PhotoUser/PhotoUser";
import UploadPhoto from "../UploadPhoto/UploadPhoto";

const Form = () => {
  const [login, setLogin] = useState(false);
  const {setPicture } = useContext(DispatchAppContext);


  const handlerRegister = (e) => {
    e.preventDefault();
  };

  const mostrarImagen = (event) => {
    const archivo = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPicture(reader.result);
    };
    reader.readAsDataURL(archivo);
  };

  return (
    <>
      <h2>{!login ? "Registrarse" : "Iniciar Sesión"}</h2>
      <form className="Login__form">
        {!login && (
          <>
            <InputForm placeholder="Nombre y apellido" type="text" />
            <InputForm placeholder="Email" type="email" />
            <InputForm placeholder="Contraseña" type="password" />
            <PhotoUser />
            <UploadPhoto onChange={mostrarImagen} />
            <button
              onClick={(e) => handlerRegister(e)}
              type="submit"
              className="Login__button"
            >
              Registrarse
            </button>
          </>
        )}
        {login && (
          <>
            <InputForm placeholder="Email" type="email" />
            <InputForm placeholder="Contraseña" type="password" />
            <button className="Login__button">Iniciar sesión</button>
          </>
        )}
        <p onClick={() => setLogin(login ? false : true)}>
          ¿Ya tienes cuenta?
          <span className="Login__color"> Inicia Sesión</span>
        </p>
        <button className="Login__buttonGoogle">
          Iniciar con
          <span className="Login__google">Google</span>
        </button>
      </form>
    </>
  );
};

export default Form;
