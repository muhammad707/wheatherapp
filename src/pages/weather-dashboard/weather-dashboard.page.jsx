import React from "react";

import { WeatherDashboardContainer } from "./weather-dashboard.styles";
import LocationAndDate from "../../components/location-and-date/location-and-date.component";
import CurrentTemperatureAndStats from "../../components/current-temperature-and-stats";

export default () => {
  return (
    <WeatherDashboardContainer>
      <LocationAndDate />
      <CurrentTemperatureAndStats />
    </WeatherDashboardContainer>
  );
};
