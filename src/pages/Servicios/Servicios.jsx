import React, { useContext } from "react";
import { Box } from "@mui/material";
import "./Servicios.scss";
import { useDispatch, useSelector } from "react-redux";
import { getServicesUser } from "../../redux/actions/action.service";
import { AppContext } from "../../context/Context";
const Servicios = () => {
  const servicesOfUsers = useSelector((state) => state.services.allServices);
  const dispatch = useDispatch();
  const { statusLogin } = useContext(AppContext);

  React.useEffect(() => {
    dispatch(getServicesUser());
  }, []);

  return (
    <div className="Servicios">
      <h2>Servicios</h2>
      <div className="Servicios__content">
        {servicesOfUsers.map((item) => (
          <Box className="Servicios__item" key={item.id}>
            <h3>{item.name_service}</h3>
            <hr />
            <p>{item.description}</p>

            {statusLogin ? (
              <>
                <p>{item.user.fullName}</p>
                <p>{item.user.phone}</p>
              </>
            ) : (
              <button
                className="btn btn-secondary "
                onClick={() => setModal(true)}
              >
                Inicia sesión para mas detalles
              </button>
            )}
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
