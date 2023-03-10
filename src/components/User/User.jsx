import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, DispatchAppContext } from "../../context/Context";

import Loading from "../Loading/Loading";

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
    return (
      <>
        <h1>Cargando datos</h1>
        <Loading />
        <br />
      </>
    );
  }

  const {
    address,
    city,
    email,
    fullName,
    displayName,
    photoURL,
    phone,
    picture,
  } = data;
  return (
    <div className="d-flex justify-content-around flex-wrap  align-items-center  border p-5 m-5 position-relative">
      <img
        style={{ width: "200px", borderRadius: 12 }}
        src={picture ? picture : photoURL}
        alt=""
      />
      <div className="text-center mt-5" style={{ fontFamily: "Radley, serif" }}>
        <h1> {fullName ? fullName : displayName}</h1>
        <p>{email ? email : "Emial"}</p>
        <p>Celular {phone ? phone : "Celular"}</p>
      </div>
    </div>
  );
};

export default User;
