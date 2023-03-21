import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { filterLanguage } from "../../../redux/reducer/bookSlices";
import { useDispatch } from "react-redux";
const FilterByLenguajes = ({ setPaginado }) => {
  const dispatch = useDispatch();
  const handleChangueLenguajes = (e) => {
    dispatch(filterLanguage(e.target.value));
    setPaginado(1);
  };
  return (
    <Accordion sx={{ mb: 2, bgcolor: "#f4f1e8" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ fontFamily: "Radley, serif" }}>Idiomas </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <RadioGroup>
          <FormControlLabel
            onChange={handleChangueLenguajes}
            value="Todos"
            control={<Radio color="secondary" />}
            label="Todos"
          />
          <FormControlLabel
            onChange={handleChangueLenguajes}
            value="Español"
            control={<Radio color="secondary" />}
            label="Español"
          />
          <FormControlLabel
            onChange={handleChangueLenguajes}
            value="Ingles"
            control={<Radio color="secondary" />}
            label="Ingles"
          />
        </RadioGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterByLenguajes;
