import React from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { searchBook } from "../../redux/reducer/bookSlices";

const SearchBook = () => {
  const dispatch = useDispatch();
  const handleChangueSearch = (e) => {
    dispatch(searchBook(e.target.value));
  };

  return (
    <React.Fragment>
      <TextField
        onChange={handleChangueSearch}
        sx={{ width: 400, display: { xs: "none", md: "flex" } }}
        id="outlined-search"
        label="Buscar libro por nombre"
        color="secondary"
        type="search"
        variant="standard"
      />
    </React.Fragment>
  );
};

export default SearchBook;
