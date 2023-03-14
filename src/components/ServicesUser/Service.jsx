import React, { useEffect } from "react";
import { data } from "./utils/dataServices";
import { Box, Typography } from "@mui/material";
import ItemService from "./ItemServices/ItemService.jsx";
import { settings } from "./utils/settingsSlick";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getServicesUser } from "../../redux/actions/action.service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.allServices);

  useEffect(() => {
    dispatch(getServicesUser());
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#314028",
        height: 650,
        pl: 7,
        pr: 7,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: 10,
          pb: 4,
          color: "#f4f1e8",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: "Radley, serif", fontSize: 50 }}
        >
          Servicios
        </Typography>
      </Box>
      <Slider {...settings}>
        {services.map((item) => (
          <ItemService
            key={item.id}
            nameService={item.name_service}
            description={item.description}
            nameUser={item.user.fullName}
            phone={item.user.phone}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default Service;
