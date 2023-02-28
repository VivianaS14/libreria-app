import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Context from "./context/context";
import App from "./routes/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <HashRouter>
        <App />
      </HashRouter>
    </Context>
  </React.StrictMode>
);
