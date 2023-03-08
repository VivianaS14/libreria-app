import React, { useContext } from "react";
import { categories } from "../AllBooks/utils/allCategories";
import { AppContext } from "../../context/Context.jsx";
import { useFormBook } from "./hooks/useFormBook";
import InputForm from "../Login/InputForm/InputForm.jsx";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { theme } from "../../theme/theme.js";
import { ThemeProvider } from "@mui/material/styles";
import "./FormRegisterBook.scss";

const FormRegisterBook = () => {
  const { statusLogin } = useContext(AppContext);
  const form = React.useRef(null);
  const { handleSubmit, handleChange, errors, handleChangeRadioButtons } =
    useFormBook(form, statusLogin);

  return (
    <React.Fragment>
      <form className="register-form-book" ref={form}>
        <div className="input-group-sm">
          <>
            <InputForm placeholder="Nombre del libro" name="title" />
            {errors.title && (
              <div className="container-error">
                <span>{errors.title}</span>
              </div>
            )}
          </>
          <>
            <InputForm placeholder="Imagen del libro" name="image" />
            {errors.image && (
              <div className="container-error">
                <span>{errors.image}</span>
              </div>
            )}
          </>
          <>
            <InputForm placeholder="Ingrese el autor del libro" name="author" />
            {errors.author && (
              <div className="container-error">
                <span>{errors.author}</span>
              </div>
            )}
          </>
          <FormControl sx={{ paddingLeft: 3, marginTop: 2 }}>
            <FormLabel
              color="secondary"
              sx={{
                fontFamily: "Radley, serif",
                fontSize: 18,
                fontStyle: "italic",
              }}
            >
              Elige el idioma
            </FormLabel>
            <RadioGroup sx={{ display: "flex", flexDirection: "row" }}>
              <FormControlLabel
                sx={{
                  fontFamily: "Radley, serif",
                  fontStyle: "italic",
                  color: "#111",
                }}
                value="Ingles"
                control={
                  <Radio
                    color="secondary"
                    onChange={handleChangeRadioButtons}
                  />
                }
                label="Ingles"
              />
              <FormControlLabel
                sx={{
                  color: "#111",
                  fontFamily: "Radley, serif",
                  fontStyle: "italic",
                }}
                value="Español"
                control={
                  <Radio
                    color="secondary"
                    onChange={handleChangeRadioButtons}
                  />
                }
                label="Español"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="date-description">
          <div className="select-options">
            <label>Selecciona el genero:</label>
            <select onChange={handleChange} className="select-genres">
              <option disabled>Generos</option>
              {categories.map((item) => (
                <option key={item.id} value={item.name_category}>
                  {item.name_category}
                </option>
              ))}
            </select>
            {errors.genres && (
              <div className="container-error">
                <span>{errors.genres}</span>
              </div>
            )}
          </div>
          <div className="select-date">
            <label>Fecha de publicacion:</label>
            <InputForm
              type="date"
              placeholder="Fecha de publicacion"
              name="datePublish"
            />
            {errors.datePublish && (
              <div className="container-error">
                <span>{errors.datePublish}</span>
              </div>
            )}
          </div>
        </div>
        <div className="description-content">
          <textarea
            className="description"
            placeholder="Reseña del libro"
            name="description"
          />
          {errors.description && (
            <div className="container-error">
              <span>{errors.description}</span>
            </div>
          )}
        </div>
        <ThemeProvider theme={theme}>
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Enviar
          </Button>
        </ThemeProvider>
      </form>
    </React.Fragment>
  );
};
export default FormRegisterBook;
