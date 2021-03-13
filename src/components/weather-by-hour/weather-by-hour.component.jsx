import React from "react";

import {
  HourContainer,
  WeatherByHourContainer,
  WeatherByHourHeading,
} from "./weather-by-hour.style";
import WeatherByHourItem from "../weather-by-hour-item/weather-by-hour-item.component";

const WeatherByHour = () => {
  return (
    <WeatherByHourContainer>
      <WeatherByHourHeading>Today's weather</WeatherByHourHeading>
      <HourContainer>
        <WeatherByHourItem />
        <WeatherByHourItem />
        <WeatherByHourItem />
        <WeatherByHourItem />
        <WeatherByHourItem />
        <WeatherByHourItem />
        <WeatherByHourItem />
      </HourContainer>
    </WeatherByHourContainer>
  );
};

export { WeatherByHour as default };
