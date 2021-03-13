import React from "react";
import { ReactComponent as MostlySunny } from "../../assets/mostly-sunny.svg";

import {
  WeatherForecastRain,
  WeatherForecastLow,
  WeatherForecastLabel,
  WeatherForecastIcon,
  WeatherForecastHigh,
  WeatherForecastDate,
  WeatherForecastRow,
  WeatherForecastWind,
} from "./weather-forecast-item.style";

const WeatherForecastItem = () => {
  return (
    <WeatherForecastRow>
      <WeatherForecastDate>
        Tue
        <WeatherForecastLabel>30/7</WeatherForecastLabel>
      </WeatherForecastDate>
      <WeatherForecastLow>
        10&deg;
        <WeatherForecastLabel>Low</WeatherForecastLabel>
      </WeatherForecastLow>
      <WeatherForecastHigh>
        21&deg;
        <WeatherForecastLabel>High</WeatherForecastLabel>
      </WeatherForecastHigh>
      <WeatherForecastIcon>
        <MostlySunny />
      </WeatherForecastIcon>
      <WeatherForecastRain>
        0%
        <WeatherForecastLabel>Rain</WeatherForecastLabel>
      </WeatherForecastRain>
      <WeatherForecastWind>
        12mph
        <WeatherForecastLabel>Wind</WeatherForecastLabel>
      </WeatherForecastWind>
    </WeatherForecastRow>
  );
};

export default WeatherForecastItem;
