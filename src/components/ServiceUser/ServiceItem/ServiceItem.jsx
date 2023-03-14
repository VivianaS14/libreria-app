import React, { useContext } from "react";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteService } from "../../../redux/reducer/serviceSlices";
import { DispatchAppContext } from "../../../context/Context";
import { getServicesUser } from "../../../redux/actions/action.service";

const ServiceItem = ({ service }) => {
  const { id, name_service, description } = service;
  const { setAlert } = useContext(DispatchAppContext);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteService(id));
    setAlert({ type: "success", message: "Servicio Eliminado" });
    dispatch(getServicesUser());
  };

  return (
    <>
      <Card sx={{ maxWidth: 450, height: "auto", borderRadius: 3 }}>
        <CardContent>
          <h4>{name_service}</h4>
          <p>{description}</p>
          <CardActions>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Eliminar
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default ServiceItem;
