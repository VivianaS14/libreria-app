import React from "react";
import { Box } from "@mui/material";
import "./Servicios.scss";
import {useDispatch, useSelector} from "react-redux";
import {getServicesUser} from '../../redux/actions/action.service';
const Servicios = () => {
    const servicesOfUsers = useSelector(state => state.services.allServices);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getServicesUser())
    }, [])


  return (
    <div className="Servicios">
      <h2>Servicios</h2>
      <div className="Servicios__content">
        {servicesOfUsers.map((item) => (
          <Box className="Servicios__item" key={item.id}>
            <h3>{item.name_service}</h3>
            <hr />
            <p>{item.description}</p>
            <p>{item.user.fullName}</p>
            <p>{item.user.phone}</p>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
