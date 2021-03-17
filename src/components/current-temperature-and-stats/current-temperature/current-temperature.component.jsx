import React from "react";

import {
  IconContainer,
  ContentContainer,
  TemperatureValueContainer,
  TemperatureSummaryContainer,
  CurrentTemperatureContainer,
} from "./current-temperature.style";

const CurrentTemperature = ({
  temperature,
  weather_icons,
  weather_descriptions,
}) => (
  <CurrentTemperatureContainer>
    <IconContainer>
      <img src={weather_icons[0]} alt="" className="temperature-icon" />
    </IconContainer>
    <ContentContainer>
      <TemperatureValueContainer>{temperature}&deg;</TemperatureValueContainer>
      <TemperatureSummaryContainer>
        {weather_descriptions.join(",")}
      </TemperatureSummaryContainer>
    </ContentContainer>
  </CurrentTemperatureContainer>
);

export { CurrentTemperature as default };
