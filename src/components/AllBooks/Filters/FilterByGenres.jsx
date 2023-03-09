import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {categories} from '../utils/allCategories';


const FilterByGenres = () => {

    return (
        <Accordion sx={{mb:2}} >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Generos </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{overflowY: 'scroll', height: 200}}>
                <RadioGroup>
                    {
                        categories.map(category => (
                            <FormControlLabel
                                value={category.name_category}
                                key={category.id}
                                control={<Radio color="secondary" />}
                                label={category.name_category}
                            />
                        ))
                    }
                </RadioGroup>
            </AccordionDetails>
        </Accordion>
    );
};

export default FilterByGenres;