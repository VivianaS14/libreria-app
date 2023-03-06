import React, { useContext, useState } from "react";
import { AppContext, DispatchAppContext } from "../../../context/Context";

import InputForm from "../InputForm/InputForm";
import PhotoUser from "../PhotoUser/PhotoUser";
import UploadPhoto from "../UploadPhoto/UploadPhoto";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [login, setLogin] = useState(false);
  const { setPicture, setUser, createUser, loginUser } =
    useContext(DispatchAppContext);
  const { user } = useContext(AppContext); //temporal mientras se crea la base de datos
  const navigate = useNavigate();

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

  const handlerChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2>{!login ? "Registrarse" : "Iniciar Sesión"}</h2>
      <form onSubmit={(e) => handlerRegister(e)} className="Login__form">
        {!login && (
          <>
            <InputForm
              required
              onChange={(e) => handlerChange(e)}
              name="fullName"
              placeholder="Nombre y apellido"
              type="text"
            />
            <InputForm
              required
              onChange={(e) => handlerChange(e)}
              name="email"
              placeholder="Email"
              type="email"
            />
            <InputForm
              required
              onChange={(e) => handlerChange(e)}
              name="address"
              placeholder="Direccción"
              type="text"
            />
            <InputForm
              required
              onChange={(e) => handlerChange(e)}
              name="city"
              placeholder="ciudad"
              type="text"
            />
            <InputForm
              required
              onChange={(e) => handlerChange(e)}
              name="phone"
              placeholder="Celular"
              type="number"
              minLength="10"
            />
            <InputForm
              onChange={(e) => handlerChange(e)}
              minLength="6"
              name="password"
              placeholder="Contraseña"
              type="password"
              required
            />
            <PhotoUser />
            <UploadPhoto onChange={mostrarImagen} />
            <button
              onClick={() => createUser()}
              type="submit"
              className="Login__button"
            >
              Registrarse
            </button>
          </>
        )}
        {login && (
          <>
            <InputForm
              onChange={(e) => handlerChange(e)}
              required
              placeholder="Email"
              type="email"
              name="email"
            />
            <InputForm
              onChange={(e) => handlerChange(e)}
              required
              placeholder="Contraseña"
              minLength="6"
              name="password"
              type="password"
            />
            <button onClick={() => loginUser()} className="Login__button">
              Iniciar sesión
            </button>
          </>
        )}
        <p onClick={() => setLogin(login ? false : true)}>
          {!login ? "¿Ya tienes una cuenta?" : "¿Aun no tienes cuenta?"}
          <span className="Login__color">
            {!login ? "Iniciar Sesión" : "Registrarse"}
          </span>
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
