import React, { useContext, useEffect } from "react";
import { addServices } from "../../../redux/reducer/serviceSlices";
import { useDispatch } from "react-redux";
import { AppContext, DispatchAppContext } from "../../../context/Context.jsx";
import { getUserService } from "../../../services/getDataFiretore/getAllService.js";
import { getServicesUser } from "../../../redux/actions/action.service";

export const useFormService = (initialValue, validation) => {
  const { statusLogin, data } = useContext(AppContext);
  const { setAlert } = useContext(DispatchAppContext);
  const [formService, setFormService] = React.useState(initialValue);
  const [phoneNumber, setPhoneNumber] = React.useState("");

  useEffect(() => {
    setPhoneNumber(data?.phone ? data.phone : "");
  }, [data]);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  let user = {};
  const prueba = async () => {
    const userRegister = await getUserService(statusLogin, phoneNumber);
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
    //setErrors(validation(formService, phoneNumber));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validation(formService, phoneNumber));
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
    phoneNumber,
    handlePhoneNumber,
  };
};
