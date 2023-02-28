import React, { createContext, useState } from "react";

const AppContext = createContext();
const DispatchAppContext = createContext();

const Context = (children) => {
  const [modal, setModal] = useState(false);
  const estado = { modal };
  const dispatcher = { setModal };

  return (
    <AppContext.Provider value={estado}>
      <DispatchAppContext.Provider value={dispatcher}>
        {children}
      </DispatchAppContext.Provider>
    </AppContext.Provider>
  );
};

export default Context;
