import React from 'react';
import {TextField} from "@mui/material";

const SearchBook = () => {
    return (
        <React.Fragment>
            <TextField
                sx={{width: 400, display: {xs: 'none', md: 'flex'}}}
                id="outlined-search"
                label="Buscar libro"
                color="secondary"
                type="search" />
        </React.Fragment>
    );
};

export default SearchBook;