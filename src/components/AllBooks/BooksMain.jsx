import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CardBook from "./CardBook/CardBook.jsx";
import Paginated from "./Paginado/Paginated.jsx";
import FilterByGenres from "./Filters/FilterByGenres";
import FilterByLenguajes from "./Filters/FilterByLenguajes.jsx";
import FilterByAuthors from "./Filters/FilterByAuthors.jsx";
import OrderBooks from "./Filters/OrderBooks.jsx";
import MenuIFilter from "./MenuDrawer/MenuIFilter.jsx";
import { getBooks } from "../../redux/actions/action.books";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import SearchBook from "../SearchBook/SearchBook.jsx";

const BooksMain = () => {
  const dispatch = useDispatch();
  const dataBooks = useSelector((state) => state.books.copyAllBooks);

  const [currentPag, setCurrentPag] = React.useState(1);
  const [booksByPag] = React.useState(6);
  const indexByBooks = booksByPag * currentPag;
  const indexPrimerBook = indexByBooks - booksByPag;
  const currentBooks = dataBooks.slice(indexPrimerBook, indexByBooks);
  const paginado = (event, paginado) => {
    setCurrentPag(paginado);
  };

  React.useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <React.Fragment>
      <h2>Intercambia y Disfruta</h2>
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "space-between",
            lg: "flex-end",
            md: "flex-end",
          },
          fontFamily: "Radley, serif",
          m: 3,
        }}
      >
        <MenuIFilter />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            fontFamily: "Radley, serif",
          }}
        >
          <SearchBook />
          <OrderBooks />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          fontFamily: "Radley, serif",
        }}
      >
        <Box
          sx={{
            fontFamily: "Radley, serif",
            mb: 2,
            width: 250,
            height: 500,
            ml: 4,
            display: { xs: "none", md: "block" },
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, fontFamily: "Radley, serif" }}>
            Filtrar por:{" "}
          </Typography>
          <FilterByGenres setPaginado={setCurrentPag} />
          <FilterByLenguajes setPaginado={setCurrentPag} />
          <FilterByAuthors setPaginado={setCurrentPag} />
        </Box>

        <Container maxWidth="lg">
          <Grid
            maxWidth="lg"
            container
            sx={{gap: 2}}
            columns={{ xs: 2, sm: 2, md: 10, lg: 12.4 }}
          >
            {currentBooks.length >= 1 ? (
              currentBooks.map((book) => (
                <Grid item sx={{ mb: 4 }} xs={2} sm={4} md={4} lg={4} key={book.id}>
                  <CardBook
                    nameBook={book.title}
                    image={book.image}
                    author={book.author}
                    status={book.status}
                    language={book.idioma}
                    description={book.description}
                    phoneNumber={book.phone}
                  />
                </Grid>
              ))
            ) : (
              <Loading />
            )}
          </Grid>
        </Container>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <Paginated
          booksByPage={booksByPag}
          books={dataBooks}
          paginado={paginado}
        />
      </Box>
    </React.Fragment>
  );
};

export default BooksMain;
