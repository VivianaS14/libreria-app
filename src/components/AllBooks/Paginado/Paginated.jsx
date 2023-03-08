import React from 'react';
import {Pagination, Stack} from "@mui/material";

const Paginated = ({books, booksByPage, paginado}) => {

    let pagNumber = [];
    for (let i = 1; i <= Math.ceil(books.length/booksByPage); i++){
        pagNumber.push(i);
    }
    return (
        <Stack spacing={2}>
            <Pagination count={pagNumber.length}  onChange={paginado} shape="rounded" />
        </Stack>
    );
};
export default Paginated;