import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import FormRegisterBook from "./FormRegisterBook.jsx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const BtnRegisterBook = () => {
    return (
        <Accordion sx={{mb: 2, bgcolor: "#9b4819"}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Registrar libros</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{bgcolor: "#f4f1e8"}}>
                <FormRegisterBook />
            </AccordionDetails>
        </Accordion >
    );
};

export default BtnRegisterBook;