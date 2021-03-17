import React from "react";
import WeatherForecastItem from "../weather-forecast-item/weather-forecast-item.component.component";

import {
  WeatherForecastList,
  WeatherForecastHeading,
  WeatherForecastContainer,
} from "./weather-forecast.style";

const WeatherForecast = ({ forecast }) => {
  return (
    <WeatherForecastList>
      <WeatherForecastHeading>Next 5 days</WeatherForecastHeading>
      <WeatherForecastContainer>
        {forecast.map((item) => (
          <WeatherForecastItem key={item.id} item={item} />
        ))}
      </WeatherForecastContainer>
    </WeatherForecastList>
  );
};

export { WeatherForecast as default };
