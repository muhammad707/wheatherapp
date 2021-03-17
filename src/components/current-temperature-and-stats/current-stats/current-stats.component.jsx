import React from "react";
import {
  CurrentStatsContainer,
  StatsLabelContainer,
  StatsValueContainer,
} from "./current-stats.style";

const CurrentStats = ({ max_temp, min_temp, wind_speed, rain, astro }) => {
  return (
    <CurrentStatsContainer>
      <div>
        <StatsValueContainer>{max_temp}&deg;</StatsValueContainer>
        <StatsLabelContainer>High</StatsLabelContainer>
        <StatsValueContainer>{min_temp}&deg;</StatsValueContainer>
        <StatsLabelContainer>Low</StatsLabelContainer>
      </div>
      <div>
        <StatsValueContainer>{wind_speed}mph</StatsValueContainer>
        <StatsLabelContainer>Wind</StatsLabelContainer>
        <StatsValueContainer>{rain}%</StatsValueContainer>
        <StatsLabelContainer>Rain</StatsLabelContainer>
      </div>
      <div>
        <StatsValueContainer>{astro.sunrise}</StatsValueContainer>
        <StatsLabelContainer>Sunrise</StatsLabelContainer>
        <StatsValueContainer>{astro.sunset}</StatsValueContainer>
        <StatsLabelContainer>Sunset</StatsLabelContainer>
      </div>
    </CurrentStatsContainer>
  );
};

export { CurrentStats as default };
