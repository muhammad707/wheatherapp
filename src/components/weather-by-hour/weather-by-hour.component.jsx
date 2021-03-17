import React from "react";

import {
  HourContainer,
  WeatherByHourContainer,
  WeatherByHourHeading,
} from "./weather-by-hour.style";
import WeatherByHourItem from "../weather-by-hour-item/weather-by-hour-item.component";

const WeatherByHour = ({ hourly }) => {
  return (
    <WeatherByHourContainer>
      <WeatherByHourHeading>Today's weather</WeatherByHourHeading>
      <HourContainer>
        {hourly.map((item) => (
          <WeatherByHourItem key={item.id} item={item} />
        ))}
      </HourContainer>
    </WeatherByHourContainer>
  );
};

export { WeatherByHour as default };
