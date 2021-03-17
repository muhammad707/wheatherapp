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

const WeatherForecastItem = ({ item }) => {
  return (
    <WeatherForecastRow>
      <WeatherForecastDate>
        {item.day}
        <WeatherForecastLabel>{item.date}</WeatherForecastLabel>
      </WeatherForecastDate>
      <WeatherForecastLow>
        {item.min_temp}&deg;
        <WeatherForecastLabel>Low</WeatherForecastLabel>
      </WeatherForecastLow>
      <WeatherForecastHigh>
        {item.max_temp}&deg;
        <WeatherForecastLabel>High</WeatherForecastLabel>
      </WeatherForecastHigh>
      <WeatherForecastIcon>
        <MostlySunny />
      </WeatherForecastIcon>
      <WeatherForecastRain>
        {item.rain}%<WeatherForecastLabel>Rain</WeatherForecastLabel>
      </WeatherForecastRain>
      <WeatherForecastWind>
        {`${item.wind_speed}`}mph
        <WeatherForecastLabel>Wind</WeatherForecastLabel>
      </WeatherForecastWind>
    </WeatherForecastRow>
  );
};

export default WeatherForecastItem;
