import React from "react";
import { Box, CardContent, Typography } from "@mui/material";

const ItemService = ({ nameService, nameUser, phone, description }) => {
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
        <Typography variant="span" sx={{ color: "#efefef" }}>
          {nameUser}
        </Typography>
        <Typography variant="span" sx={{ color: "#efefef" }}>
          {phone}
        </Typography>
      </Box>
    </Box>
  );
};

export default ItemService;
