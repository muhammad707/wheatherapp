import React from "react";
import {
  LocationAndDateContainer,
  LocationHeader,
} from "./location-and-date.style";

export default ({ location, date }) => {
  return (
    <LocationAndDateContainer>
      <LocationHeader>London, UK</LocationHeader>
      <div>Sunday 4th Sunday</div>
    </LocationAndDateContainer>
  );
};
