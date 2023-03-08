import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Checkbox,
    FormControlLabel,
    FormGroup, Radio, RadioGroup,
    Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {filterLanguage} from '../../../redux/reducer/bookSlices';
import {useDispatch} from "react-redux";
const FilterByLenguajes = () => {
    const dispatch = useDispatch()
    const handleChangueLenguajes = (e) => {
        dispatch(filterLanguage(e.target.value));
    }
    return (
        <Accordion sx={{mb:2}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Idiomas </Typography>
            </AccordionSummary>
            <AccordionDetails >
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