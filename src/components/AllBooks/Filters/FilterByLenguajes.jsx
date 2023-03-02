import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const FilterByLenguajes = () => {
    return (
        <Accordion sx={{mb:2}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Idiomas </Typography>
            </AccordionSummary>
            <AccordionDetails >
                <FormGroup>
                    <FormControlLabel control={<Checkbox color="secondary" />} label="Español"/>
                    <FormControlLabel control={<Checkbox color="secondary" />} label="Ingles"/>
                </FormGroup>
            </AccordionDetails>
        </Accordion>
    );
};

export default FilterByLenguajes;