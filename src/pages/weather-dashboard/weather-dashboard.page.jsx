import React from "react";

import { WeatherDashboardContainer } from "./weather-dashboard.styles";
import LocationAndDate from "../../components/location-and-date/location-and-date.component";
import CurrentTemperatureAndStats from "../../components/current-temperature-and-stats";
import WeatherByHour from "../../components/weather-by-hour/weather-by-hour.component";
import WeatherForecast from "../../components/weather-forecast/weather-forecast.component";

const WeatherDashboard = () => {
  return (
    <WeatherDashboardContainer>
      <LocationAndDate />
      <CurrentTemperatureAndStats />
      <WeatherByHour />
      <WeatherForecast />
    </WeatherDashboardContainer>
  );
};

export { WeatherDashboard as default };
