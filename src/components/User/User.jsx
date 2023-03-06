import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, DispatchAppContext } from "../../context/Context";
import { auth } from "../../firebase/firebase";

const User = () => {
  const { dataUser, statusLogin, data, loading } = useContext(AppContext);
  const { setModal, getUser, setLoading } = useContext(DispatchAppContext);
  const navigate = useNavigate();
  getUser();

  useEffect(() => {
    if (statusLogin) {
      console.log(statusLogin);
    } else {
      alert("sesion cerrada");
      navigate("/");
    }
  }, [statusLogin]);

  if (loading == true) {
    return <h1>Cargando data</h1>;
  }

  const { address, city, email, fullName, phone, picture } = data;
  return (
    <div className="d-flex d-flex justify-content-around  align-items-center  border p-5 m-5 position-relative">
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
