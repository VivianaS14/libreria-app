import React, { createContext, useState } from "react";

export const AppContext = createContext();
export const DispatchAppContext = createContext();

const Context = (props) => {
  const [modal, setModal] = useState(false);
  const [picture, setPicture] = useState("");
  const [user, setUser] = useState([]);//temporal mientras se crea la base de datos

  const estado = { modal, picture, user };
  const dispatcher = { setModal, setPicture, setUser };

  return (
    <AppContext.Provider value={estado}>
      <DispatchAppContext.Provider value={dispatcher}>
        {props.children}
      </DispatchAppContext.Provider>
    </AppContext.Provider>
  );
};

export default Context;
