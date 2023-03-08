import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, DispatchAppContext } from "../../context/Context";

const User = () => {
  const { statusLogin, data, loading } = useContext(AppContext);
  const { getUser } = useContext(DispatchAppContext);
  const navigate = useNavigate();
  getUser();

  useEffect(() => {
    if (statusLogin) {
    } else {
      navigate("/");
    }
  }, [statusLogin]);

  if (loading == true) {
    return <h1>Cargando data</h1>;
  }

  const { address, city, email, fullName, phone, picture } = data;
  return (
    <div className="d-flex justify-content-around flex-wrap  align-items-center  border p-5 m-5 position-relative">
      <img style={{ width: "200px" }} src={picture} alt="" />
      <div className="text-center mt-5" style={{ fontFamily: "Radley, serif" }}>
        <h1> {fullName ? fullName : "Nombre de usuario"}</h1>
        <p>{email ? email : "emial"}</p>
        <p>Libros cambiados: 0 </p>
      </div>
    </div>
  );
};

export default User;
