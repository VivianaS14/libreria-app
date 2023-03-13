import React from 'react';
import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {searchBook} from '../../redux/reducer/bookSlices';
const SearchBook = () => {
    const dispach = useDispatch();
    const handleChangueSearch = (e) => {
        dispach(searchBook(e.target.value))
    }

    return (
        <React.Fragment>
            <TextField
                onChange={handleChangueSearch}
                sx={{width: 400, display: {xs: 'none', md: 'flex'}}}
                id="outlined-search"
                label="Buscar libro"
                color="secondary"
                type="search" />
        </React.Fragment>
    );
};

export default SearchBook;