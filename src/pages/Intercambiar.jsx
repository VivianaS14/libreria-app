import React from "react";
import BooksMain from "../components/AllBooks/BooksMain.jsx";
import {theme} from "../theme/theme.js";
import {ThemeProvider} from "@mui/material/styles";

const Intercambiar = () => {
  return (
    <div>
      <div className="Intercambiar">
          <ThemeProvider theme={theme}>
              <BooksMain />
          </ThemeProvider>
      </div>
    </div>
  );
};

export default Intercambiar;
