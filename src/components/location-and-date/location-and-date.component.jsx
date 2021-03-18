import React from "react";
import * as moment from "moment";

import {
  LocationAndDateContainer,
  LocationHeader,
} from "./location-and-date.style";

const LocationAndDate = ({ location }) => {
  return (
    <LocationAndDateContainer>
      <LocationHeader>{`${location.name}, ${location.country}`}</LocationHeader>
      <div>{moment(location.localtime).format("ll")}</div>
    </LocationAndDateContainer>
  );
};

export { LocationAndDate as default };
