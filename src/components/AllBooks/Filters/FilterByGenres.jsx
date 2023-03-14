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
import { categories } from "../utils/allCategories";
import { filterGenre } from "../../../redux/reducer/bookSlices";
import { useDispatch } from "react-redux";
const FilterByGenres = ({ setPaginado }) => {
  const dispatch = useDispatch();
  const handleChangueByGenres = (e) => {
    dispatch(filterGenre(e.target.value));
    setPaginado(1);
  };

  return (
    <Accordion sx={{ mb: 2, bgcolor: "#f4f1e8" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ fontFamily: "Radley, serif" }}>Géneros</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ overflowY: "scroll", height: 200 }}>
        <RadioGroup>
          {categories.map((category) => (
            <FormControlLabel
              value={category.name_category}
              key={category.id}
              onChange={handleChangueByGenres}
              control={<Radio color="secondary" />}
              label={category.name_category}
            />
          ))}
        </RadioGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterByGenres;
