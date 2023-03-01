import React, { useContext, useState } from "react";
import { AppContext, DispatchAppContext } from "../../context/Context";
import user from "./img/user.svg";
import InputForm from "./InputForm/InputForm";
import "./Login.scss";
import PhotoUser from "./PhotoUser/PhotoUser";

const Login = () => {
  const [login, setLogin] = useState(false);

  const { modal } = useContext(AppContext);
  const { setModal } = useContext(DispatchAppContext);

  return (
    <>
      {!modal && <button onClick={() => setModal(true)}>Inicia sesión</button>}
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
              <h2>Registrarse</h2>
              <form className="Login__form">
                {!login && (
                  <>
                    <InputForm placeholder="Nombre y apellido" type="text" />
                    <InputForm placeholder="Email" type="email" />
                    <InputForm placeholder="Contraseña" type="password" />
                    <PhotoUser />
                    <button className="Login__button">Registrarse</button>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
