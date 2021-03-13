import React from "react";
import {
  CurrentStatsContainer,
  StatsLabelContainer,
  StatsValueContainer,
} from "./current-stats.style";

const CurrentStats = () => {
  return (
    <CurrentStatsContainer>
      <div>
        <StatsValueContainer>23&deg;</StatsValueContainer>
        <StatsLabelContainer>High</StatsLabelContainer>
        <StatsValueContainer>14&deg;</StatsValueContainer>
        <StatsLabelContainer>Low</StatsLabelContainer>
      </div>
      <div>
        <StatsValueContainer>7mph</StatsValueContainer>
        <StatsLabelContainer>Wind</StatsLabelContainer>
        <StatsValueContainer>0%</StatsValueContainer>
        <StatsLabelContainer>Rain</StatsLabelContainer>
      </div>
      <div>
        <StatsValueContainer>05:27</StatsValueContainer>
        <StatsLabelContainer>Sunrise</StatsLabelContainer>
        <StatsValueContainer>20:57</StatsValueContainer>
        <StatsLabelContainer>Sunset</StatsLabelContainer>
      </div>
    </CurrentStatsContainer>
  );
};

export { CurrentStats as default };
