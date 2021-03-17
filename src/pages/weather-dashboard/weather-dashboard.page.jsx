import React, { useEffect } from "react";
import { createSelector } from "reselect";
import { connect, useDispatch, useSelector } from "react-redux";

import { WeatherDashboardContainer } from "./weather-dashboard.styles";
import { fetchWeatherInformationStart } from "../../redux/weather/weather.actions";
import WeatherByHour from "../../components/weather-by-hour/weather-by-hour.component";
import CurrentTemperatureAndStats from "../../components/current-temperature-and-stats";
import WeatherForecast from "../../components/weather-forecast/weather-forecast.component";
import LocationAndDate from "../../components/location-and-date/location-and-date.component";

const WeatherDashboard = () => {
  const dispatch = useDispatch();
  const weather = (state) => state.weather;

  const weatherSelector = createSelector(
    [weather],
    (weather) => weather.weather_data
  );

  const weatherState = useSelector(weatherSelector);

  useEffect(() => {
    dispatch(fetchWeatherInformationStart("tashkent"));
  }, [dispatch]);

  return (
    <WeatherDashboardContainer>
      {weatherState ? (
        <React.Fragment>
          <LocationAndDate location={weatherState.location} />
          <CurrentTemperatureAndStats current={weatherState.current} />
          <WeatherByHour hourly={weatherState.hourly} />
          <WeatherForecast forecast={weatherState.forecast} />
        </React.Fragment>
      ) : (
        <span>Loading</span>
      )}
    </WeatherDashboardContainer>
  );
};

const mapStateToProps = ({ weather }) => {
  const { weather_data } = weather;
  return { weather_data };
};

export default connect(mapStateToProps)(WeatherDashboard);
