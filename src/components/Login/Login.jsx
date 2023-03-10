import React, { useContext, useState } from "react";
import { AppContext, DispatchAppContext } from "../../context/Context";
import Form from "./Form/Form";
import user from "./img/user.svg";
import "./Login.scss";

const Login = () => {
  const { modal } = useContext(AppContext);
  const { setModal } = useContext(DispatchAppContext);

  return (
    <>
      {!modal && <button className="Login__btnDefault" onClick={() => setModal(true)}>Inicia sesión</button>}
      {modal && (
        <div className="Login">
          <div className="Login__container">
            <button className="Login__exit" onClick={() => setModal(false)}>
              x
            </button>
            <div className="Login__infoContainer">
              <p className="Login__logo">A</p>
              <h1 className="Login__titulo">
                Triple
                <span className="Login__tituloColor"> AAA</span>
              </h1>
              <p className="Login__info">
                Aprender a leer es encender un fuego y cada sílaba que se
                deletrea es una chispa de magia cuya duración es la vida misma.
              </p>
            </div>
            <div className="Login__formContainer">
              <img className="Login__iconUser" src={user} alt="IconUsuario" />
              <Form />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
