import React from "react";
import {
  LocationAndDateContainer,
  LocationHeader,
} from "./location-and-date.style";

const LocationAndDate = ({ location, date }) => {
  return (
    <LocationAndDateContainer>
      <LocationHeader>London, UK</LocationHeader>
      <div>Sunday 4th Sunday</div>
    </LocationAndDateContainer>
  );
};

export { LocationAndDate as default };
