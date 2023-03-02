import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Checkbox,
    FormControlLabel, FormGroup,
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
                <Typography>Categorias </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{overflowY: 'scroll', height: 200}}>
                <FormGroup>
                    {
                        categories.map(category => (
                            <FormControlLabel
                                key={category.id}
                                control={<Checkbox color="secondary" />}
                                label={category.name_category}
                            />
                        ))
                    }
                </FormGroup>
            </AccordionDetails>
        </Accordion>
    );
};

export default FilterByGenres;