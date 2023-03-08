import React from "react";
import "./EventsItem.scss";

const EventsItem = ({ data }) => {
  return (
    <div className="EventsItem">
      <h3>{data.title}</h3>
      <hr />
      <p>Por: {data.owner}</p>
      <p>{data.description}</p>
      <p className="EventsItem__info">
        {data.location} <span>{data.date}</span>
      </p>
    </div>
  );
};

export default EventsItem;
