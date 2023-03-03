import React, { useContext } from "react";
import Logo from "./img/logo-app.png";
import { Logout, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { AppContext } from "../../context/Context";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.scss";

const Navbar = () => {
  const { statusLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const logOut = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand Navbar__logo">
            <Link to="/">
              <img src={Logo} alt="Logo App" width="60" />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Menu sx={{ fontSize: 40, color: "#9b4819" }} />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav Navbar__items">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link item__link"
                  aria-current="page"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/intercambiar"
                  className="nav-link item__link"
                  aria-current="page"
                >
                  Intercambiar
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/servicios"
                  className="nav-link item__link"
                  aria-current="page"
                >
                  Servicios
                </Link>
              </li>
              {statusLogin ? (
                <>
                  <li className="nav-item">
                    <Link
                      to="/perfil"
                      className="nav-link item__link"
                      aria-current="page"
                    >
                      Perfil
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link item__link"
                      aria-current="page"
                    >
                      <Logout sx={{ fontSize: 30 }} onClick={logOut} />
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Login />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
