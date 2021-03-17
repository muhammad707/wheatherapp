import React from "react";
import * as moment from "moment";

import { ReactComponent as MostlySunny } from "../../assets/mostly-sunny.svg";
import {
  WeatherByHourItemContainer,
  HourContainer,
} from "./weather-by-hour-item.style";

const WeatherByHourItem = ({ item }) => (
  <WeatherByHourItemContainer>
    <HourContainer>{moment(item.time).format("LT")}</HourContainer>
    <MostlySunny />
    <div>{item.temperature}&deg;</div>
  </WeatherByHourItemContainer>
);

export { WeatherByHourItem as default };
