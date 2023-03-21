import React, { useContext, useState } from "react";
import { DispatchAppContext } from "../../context/Context";
import InputForm from "../Login/InputForm/InputForm";
import PhotoUser from "../Login/PhotoUser/PhotoUser";
import UploadPhoto from "../Login/UploadPhoto/UploadPhoto";

import './Update.scss'

const UpdateInfo = ({
  fullName,
  phone,
  address,
  setEditState,
  id,
  city,
  photo,
}) => {
  const initialState = { fullName, phone, address, id, city, photo };

  const [infoUser, setInfoUser] = useState(initialState);
  const { setPicture, setAlert, editUser } = useContext(DispatchAppContext);

  const handlerChange = (e) => {
    setInfoUser({
      ...infoUser,
      [e.target.name]: e.target.value,
    });
  };

  const mostrarImagen = (event) => {
    const archivo = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPicture(reader.result);
      setAlert({ type: "info", message: "Foto subida exitosamente" });
    };
    reader.readAsDataURL(archivo);
  };

  return (
    <div className='updateInfo'>
      <InputForm
        required
        onChange={(e) => handlerChange(e)}
        name="fullName"
        placeholder="Nombre y apellido"
        type="text"
        value={infoUser.fullName}
      />

      <InputForm
        required
        onChange={(e) => handlerChange(e)}
        name="address"
        placeholder="Direccción"
        type="text"
        value={infoUser.address}
      />
      <InputForm
        required
        onChange={(e) => handlerChange(e)}
        name="city"
        placeholder="Ciudad"
        type="text"
        value={infoUser.city}
      />
      <InputForm
        required
        onChange={(e) => handlerChange(e)}
        name="phone"
        placeholder="Celular"
        type="number"
        minLength="10"
        value={infoUser.phone}
      />

      <PhotoUser />
      <UploadPhoto onChange={mostrarImagen} />
      <button
        onClick={() => {
          editUser(infoUser);
          setEditState(false);
        }}
        type="submit"
        className="Login__button"
      >
        Guardar cambios
      </button>
      <button onClick={() => setEditState(false)} className="btn btn-danger">
        Cerrar
      </button>
    </div>
  );
};

export default UpdateInfo;
