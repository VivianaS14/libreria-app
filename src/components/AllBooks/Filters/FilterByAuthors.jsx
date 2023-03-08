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
import {allAthors} from '../utils/authors';


const FilterByAuthors = () => {
    return (
        <Accordion sx={{mb:2}} >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Autores </Typography>
            </AccordionSummary>
            <AccordionDetails >
                <FormGroup>
                    {
                        allAthors.map(item => (
                            <FormControlLabel key={item.id} control={<Checkbox color="secondary" />} label={item.name}/>
                        ))
                    }
                </FormGroup>
            </AccordionDetails>
        </Accordion>
    );
};

export default FilterByAuthors;