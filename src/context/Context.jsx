import React, { createContext, useState } from "react";

export const AppContext = createContext();
export const DispatchAppContext = createContext();

const Context = (props) => {
  const [modal, setModal] = useState(false);
  const estado = { modal };
  const dispatcher = { setModal };

  return (
    <AppContext.Provider value={estado}>
      <DispatchAppContext.Provider value={dispatcher}>
        {props.children}
      </DispatchAppContext.Provider>
    </AppContext.Provider>
  );
};

export default Context;
