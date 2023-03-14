import React, { useContext } from "react";
import { addServices } from "../../../redux/reducer/serviceSlices";
import { useDispatch } from "react-redux";
import { AppContext, DispatchAppContext } from "../../../context/Context.jsx";
import { getUserService } from "../../../services/getDataFiretore/getAllService.js";
import { getServicesUser } from "../../../redux/actions/action.service";
export const useFormService = (initilaValue, validation) => {
  const { statusLogin } = useContext(AppContext);
  const { setAlert } = useContext(DispatchAppContext);
  const [formService, setFormService] = React.useState(initilaValue);
  let user = {};
  const prueba = async () => {
    const userRegister = await getUserService(statusLogin);
    user.fullName = userRegister.fullName;
    user.phone = userRegister.phone;
  };
  const [errors, setErrors] = React.useState({});
  const dispatch = useDispatch();
  const handleChangue = (e) => {
    prueba();
    setFormService({
      ...formService,
      user,
      [e.target.name]: e.target.value,
      userId: statusLogin.uid,
    });
    setErrors(validation(formService));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validation(formService));
    if (Object.keys(errors).length === 0) {
      dispatch(addServices(formService));
      setFormService({
        name_service: "",
        description: "",
      });
      setAlert({ type: "success", message: "Servicio Añadido" });
      dispatch(getServicesUser());
    }
  };
  return {
    formService,
    handleChangue,
    errors,
    handleSubmit,
  };
};
