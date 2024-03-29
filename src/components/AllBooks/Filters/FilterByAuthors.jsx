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
import { useGetAuthors } from "../hooks/useGetAuthors.js";
import { useDispatch, useSelector } from "react-redux";
import { filterAuthors } from "../../../redux/reducer/bookSlices";

const FilterByAuthors = ({ setPaginado }) => {
  const allBooks = useSelector((state) => state.books.allBooks);
  const { authors } = useGetAuthors(allBooks);

  const dispatch = useDispatch();
  const handleFilterByAuthors = (e) => {
    dispatch(filterAuthors(e.target.value));
    setPaginado(1);
  };

  return (
    <Accordion sx={{ mb: 2, bgcolor: "#f4f1e8" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ fontFamily: "Radley, serif" }}>Autores</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ overflowY: "scroll", height: 200 }}>
        <RadioGroup>
          <FormControlLabel
            onChange={handleFilterByAuthors}
            value="Todos"
            control={<Radio color="secondary" />}
            label="Todos"
          />
          {authors.map((item) => (
            <FormControlLabel
              key={item.id}
              onChange={handleFilterByAuthors}
              value={item.name}
              control={<Radio color="secondary" />}
              label={item.name}
            />
          ))}
        </RadioGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterByAuthors;
