import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServicesUser } from "../../redux/actions/action.service";
import ServicioItem from "./ServiciosItem/ServicioItem";
import "./Servicios.scss";

const Servicios = () => {
  const servicesOfUsers = useSelector((state) => state.services.allServices);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getServicesUser());
  }, []);

  return (
    <div className="Servicios">
      <h2>Servicios</h2>
      <div className="Servicios__content">
        {servicesOfUsers.map((item) => (
          <ServicioItem key={item.id} service={item} />
        ))}
      </div>
    </div>
  );
};

export default Servicios;
