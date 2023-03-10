import React from "react";
import BooksMain from "../../components/AllBooks/BooksMain.jsx";
import { theme } from "../../theme/theme.js";
import { ThemeProvider } from "@mui/material/styles";
import "./Intercambiar.scss";

const Intercambiar = () => {
  return (
    <div className="Intercambiar">
      <ThemeProvider theme={theme}>
        <BooksMain />
      </ThemeProvider>
    </div>
  );
};

export default Intercambiar;
