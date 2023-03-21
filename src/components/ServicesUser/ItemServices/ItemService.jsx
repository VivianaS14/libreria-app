import React, { useContext } from "react";
import { Box, Button, CardContent, Typography } from "@mui/material";
import { AppContext, DispatchAppContext } from "../../../context/Context";
import { WhatsApp } from "@mui/icons-material";

const ItemService = ({ nameService, nameUser, phone, description }) => {
  const { statusLogin } = useContext(AppContext);
  const { setModal } = useContext(DispatchAppContext);

  return (
    <Box sx={{ m: 2, fontFamily: "Radley, serif" }}>
      <Typography
        variant="h6"
        sx={{
          color: "#efefef",
          textAlign: "center",
          mt: 3,
          fontFamily: "Radley, serif",
          fontSize: 28,
          fontStyle: "italic",
        }}
      >
        {nameService}
      </Typography>
      <hr style={{ height: 3, backgroundColor: "#bd8f53", border: "none" }} />
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            color: "#efefef",
            fontFamily: "Radley, serif",
            textAlign: "center",
            fontSize: 15,
            height: 150,
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 3,
        }}
      >
        {statusLogin && (
          <>
            <Typography variant="span" sx={{ color: "#efefef", fontSize: 18 }}>
              {nameUser}
            </Typography>
            <Typography variant="span" sx={{ color: "#efefef", fontSize: 18 }}>
              +57 {phone}
            </Typography>
            <Button
              variant="contained"
              color="success"
              sx={{
                fontFamily: "Radley, serif",
                color: "#fff",
                pl: 3,
                pr: 3,
                mt: 2,
              }}
              endIcon={<WhatsApp />}
            >
              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Contactar Servicio
              </a>
            </Button>
          </>
        )}
        {!statusLogin && (
          <Button
            onClick={() => setModal(true)}
            variant="contained"
            color="success"
            sx={{
              fontFamily: "Radley, serif",
              color: "#fff",
              pl: 3,
              pr: 3,
            }}
          >
            Inicia sesión para mas detalles
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ItemService;
