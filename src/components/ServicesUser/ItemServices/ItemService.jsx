import React, { useContext } from "react";
import { Box, CardContent, Typography } from "@mui/material";
import { AppContext, DispatchAppContext } from "../../../context/Context";

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
            <Typography variant="span" sx={{ color: "#efefef" }}>
              {nameUser}
            </Typography>
            <Typography variant="span" sx={{ color: "#efefef" }}>
              {phone}
            </Typography>
          </>
        )}
        {!statusLogin && (
          <button className="btn btn-success" onClick={() => setModal(true)}>
            Inicia sesión para mas detalles
          </button>
        )}
      </Box>
    </Box>
  );
};

export default ItemService;
