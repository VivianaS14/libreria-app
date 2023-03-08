import React from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import { settings } from "./utils/settingsSlick";
import { data } from "./utils/dataEvents";
import "./Events.scss";
import EventsItem from "./EventsItem/EventsItem";

const Events = () => {
  return (
    <Box
      sx={{
        backgroundColor: "f4f1e8",
        height: 500,
        p: 10,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <h3 className="Events__title">Actividades y Eventos para Lectores</h3>
      </Box>
      <Slider {...settings}>
        {data.map((event) => (
          <EventsItem key={event.id} data={event} />
        ))}
      </Slider>
    </Box>
  );
};

export default Events;
