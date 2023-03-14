import React, { useContext } from "react";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import { AppContext, DispatchAppContext } from "../../../context/Context";

const ServicioItem = ({ service }) => {
  const { name_service, description, user } = service;
  const { setModal } = useContext(DispatchAppContext);
  const { statusLogin } = useContext(AppContext);

  return (
    <>
      <Card sx={{ maxWidth: 450, borderRadius: 3 }}>
        <CardContent>
          <h4>{name_service}</h4>
          <hr />
          <p>{description}</p>
          {statusLogin ? (
            <div className="Servicio__Description">
              <p>{user.fullName}</p>
              <p>+57 {user.phone}</p>
            </div>
          ) : (
            <CardActions>
              <Button
                variant="contained"
                color="success"
                onClick={() => setModal(true)}
              >
                Inicia sesión para mas detalles
              </Button>
            </CardActions>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default ServicioItem;
