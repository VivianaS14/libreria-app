import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, DispatchAppContext } from "../../context/Context";
import { auth } from "../../firebase/firebase";

const User = () => {
  const { dataUser, statusLogin, data, loading } = useContext(AppContext);
  const { setModal } = useContext(DispatchAppContext);

  const navigate = useNavigate();

  const logOut = () => {
    auth.signOut();
    navigate("/");
  };

  if (statusLogin === null) {
    navigate("/");
    setModal(true);
    auth.signOut();
  }

  if (loading == true) {
    return <h1>Cargando data</h1>;
  }

  const { address, city, email, fullName, phone, picture } = data;
  return (
    <div className="d-flex d-flex justify-content-around  align-items-center  border p-5 m-5 position-relative">
      <button
        onClick={logOut}
        className="btn btn-danger position-absolute top-0 end-0 m-5"
      >
        Cerrar sesion
      </button>

      <img style={{ width: "200px" }} src={picture} alt="" />
      <div className="col-5">
        <h1> {fullName ? fullName : "Nombre de usuario"}</h1>
        <p>{email ? email : "emial"}</p>
        <p>Libros cambiados: 0 </p>
      </div>
    </div>
  );
};

export default User;
