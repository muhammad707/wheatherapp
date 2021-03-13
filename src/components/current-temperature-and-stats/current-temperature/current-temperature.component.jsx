import React from "react";

import logo from "../../../assets/mostly-sunny.svg";
import {
  IconContainer,
  ContentContainer,
  TemperatureValueContainer,
  TemperatureSummaryContainer,
  CurrentTemperatureContainer,
} from "./current-temperature.style";

const CurrentTemperature = () => (
  <CurrentTemperatureContainer>
    <IconContainer>
      <img src={logo} alt="" className="temperature-icon" />
    </IconContainer>
    <ContentContainer>
      <TemperatureValueContainer>21&deg;</TemperatureValueContainer>
      <TemperatureSummaryContainer>Mostly sunny</TemperatureSummaryContainer>
    </ContentContainer>
  </CurrentTemperatureContainer>
);

export { CurrentTemperature as default };
