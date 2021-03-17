import React from "react";
import CurrentTemperature from "./current-temperature/current-temperature.component";
import CurrentStats from "./current-stats/current-stats.component";

const TemperatureAndStats = ({ current }) => {
  return (
    <React.Fragment>
      <CurrentTemperature {...current} />
      <CurrentStats {...current} />
    </React.Fragment>
  );
};

export { TemperatureAndStats as default };
