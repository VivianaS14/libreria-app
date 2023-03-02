import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import userDefault from "../Login/img/user.svg";


const User = () => {
  const { picture, user } = useContext(AppContext);
  
const {fullName, email, }= user

  return (
    <div className="d-flex d-flex justify-content-around  align-items-center  border p-5 m-5 position-relative">
      <button className="btn btn-danger position-absolute top-0 end-0 m-5">
        Cerrar sesion
      </button>

      <img
        style={{ width: "200px" }}
        src={picture !== null ? picture : userDefault}
        alt=""
      />
      <div className="col-5">
        <h1> {fullName ? fullName : "Nombre de usuario"}</h1>
        <p>{email ? email : "emial"}</p>
        <p>Libros cambiados: 0 </p>
      </div>
    </div>
  );
};

export default User;
