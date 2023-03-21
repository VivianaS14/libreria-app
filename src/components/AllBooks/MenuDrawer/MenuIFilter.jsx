import React from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  styled,
  useTheme,
} from "@mui/material";
import FilterByLenguajes from "../Filters/FilterByLenguajes.jsx";
import FilterByGenres from "../Filters/FilterByGenres.jsx";
import FilterByAuthors from "../Filters/FilterByAuthors.jsx";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const MenuIFilter = () => {
  const themeUI = useTheme();
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        color="secondary"
        onClick={handleDrawerOpen}
        variant="text"
        sx={{
          mr: 2,
          ...(open && { display: "none" }),
          display: { lg: "none", xs: "flex", md: "none" },
        }}
      >
        Filtrar por:
      </Button>
      <Drawer variant="persistent" anchor="left" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {themeUI.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Radley, serif",
              }}
            >
              <FilterByLenguajes />
              <FilterByGenres />
              <FilterByAuthors />
            </Box>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default MenuIFilter;
