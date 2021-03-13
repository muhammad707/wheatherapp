import React from "react";
import CurrentTemperature from "./current-temperature/current-temperature.component";
import CurrentStats from "./current-stats/current-stats.component";

export default () => {
  return (
    <React.Fragment>
      <CurrentTemperature />
      <CurrentStats />
    </React.Fragment>
  );
};
