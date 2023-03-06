import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Context from "./context/Context";
import {Provider} from 'react-redux';
import {store} from './redux/store';
import App from "./routes/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
          <Context>
              <HashRouter>
                  <App />
              </HashRouter>
          </Context>
      </Provider>
  </React.StrictMode>
);
