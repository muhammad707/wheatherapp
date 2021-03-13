import React from "react";
import WeatherForecastItem from "../weather-forecast-item/weather-forecast-item.component.component";

import {
  WeatherForecastList,
  WeatherForecastHeading,
  WeatherForecastContainer,
} from "./weather-forecast.style";

const WeatherForecast = () => {
  return (
    <WeatherForecastList>
      <WeatherForecastHeading>Next 5 days</WeatherForecastHeading>
      <WeatherForecastContainer>
        <WeatherForecastItem />
        <WeatherForecastItem />
        <WeatherForecastItem />
        <WeatherForecastItem />
        <WeatherForecastItem />
      </WeatherForecastContainer>
    </WeatherForecastList>
  );
};

export { WeatherForecast as default };
