import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../context/Context";
import { getServicesUser } from "../../redux/actions/action.service";
import ServiceItem from "./ServiceItem/ServiceItem";
import "./ServiceUser.scss";

const ServiceUser = () => {
  const { statusLogin } = useContext(AppContext);
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.allServices);
  const [userServices, setUserServices] = useState([]);

  useEffect(() => {
    dispatch(getServicesUser());
  }, []);

  useEffect(() => {
    setUserServices(
      services.filter((service) => service.userId === statusLogin.uid)
    );
  }, [services]);

  return (
    <div className="ServiceUser">
      <h2>Mis Servicios</h2>
      <div className="ServiceUser__container">
        {userServices.length >= 1 ? (
          userServices.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))
        ) : (
          <h3>No tienes servicios...</h3>
        )}
      </div>
    </div>
  );
};

export default ServiceUser;
