import React from "react";
import InputForm from "../Login/InputForm/InputForm.jsx";
import { Button } from "@mui/material";
import { useFormService } from "./hooks/useFormService";
import { theme } from "../../theme/theme.js";
import { ThemeProvider } from "@mui/material/styles";
import "./FormRegisterService.scss";

const initialForm = {
  name_service: "",
  description: "",
};
const validationForm = (form) => {
  let errors = {};
  if (!form.name_service) errors.name = "Ingresa el nombre del servicio";
  if (!form.description)
    errors.description = "Ingresa la descripción del servicio";
  return errors;
};
const FormRegisterService = () => {
  const { formService, handleChangue, errors, handleSubmit } = useFormService(
    initialForm,
    validationForm
  );

  return (
    <form className="register-form-service" onSubmit={handleSubmit}>
      <div className="input-group-sm-service">
        <>
          <InputForm
            name="name_service"
            value={formService.name_service}
            onChange={handleChangue}
            placeholder="Tipo de servicio"
          />
          {errors.name && (
            <div className="error-form-service">
              <span>{errors.name}</span>
            </div>
          )}
        </>
        <>
          <textarea
            name="description"
            value={formService.description}
            onChange={handleChangue}
            placeholder="Descripción del servicio"
          />
          {errors.description && (
            <div className="error-form-service">
              <span>{errors.description}</span>
            </div>
          )}
        </>
      </div>
      <ThemeProvider theme={theme}>
        <Button type="submit" variant="contained">
          Registrar servicio
        </Button>
      </ThemeProvider>
    </form>
  );
};
export default FormRegisterService;
