import React from "react";
import user from "../Login/img/user.svg";

import "./User.scss";

const User = () => {
  return (
    <div className="d-flex d-flex justify-content-around  align-items-center  border p-5 m-5 position-relative">
      <button className="btn btn-danger position-absolute top-0 end-0 m-5">
        Cerrar sesion
      </button>

      <img style={{ width: "200px" }} src={user} alt="" />
      <div className="col-5">
        <h1> name</h1>
        <p>Email</p>
        <p>Libros cambiados</p>
      </div>
    </div>
  );
};

export default User;
