import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormRegisterBook from "./FormRegisterBook.jsx";

const BtnRegisterBook = ({ formRegister, textTitle }) => {
  return (
    <Accordion
      sx={{
        mb: 5,
        bgcolor: "#9b4819",
        color: "#f4f1e8",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#f4f1e8" }} />}
      >
        <Typography sx={{ fontFamily: "Radley, serif", fontSize: 20 }}>
          {textTitle}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ bgcolor: "#f4f1e8" }}>
        {formRegister}
      </AccordionDetails>
    </Accordion>
  );
};

export default BtnRegisterBook;
