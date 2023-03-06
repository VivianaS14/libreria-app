import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import FormRegisterBook from "./FormRegisterBook.jsx";

const BtnRegisterBook = () => {
    return (
        <Accordion>
            <AccordionSummary>
                <Typography>Registrar libros</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{bgcolor: "#f4f1e8"}}>
                <FormRegisterBook />
            </AccordionDetails>
        </Accordion>
    );
};

export default BtnRegisterBook;