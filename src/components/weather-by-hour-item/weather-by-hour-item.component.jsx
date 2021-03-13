import React from "react";

import { ReactComponent as MostlySunny } from "../../assets/mostly-sunny.svg";
import {
  WeatherByHourItemContainer,
  HourContainer,
} from "./weather-by-hour-item.style";

const WeatherByHourItem = () => (
  <WeatherByHourItemContainer>
    <HourContainer>6am</HourContainer>
    <MostlySunny />
    <div>14&deg;</div>
  </WeatherByHourItemContainer>
);

export { WeatherByHourItem as default };
