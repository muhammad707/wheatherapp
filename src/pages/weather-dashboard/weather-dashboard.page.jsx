import React, { useEffect, useState } from "react";
import { createSelector } from "reselect";
import { connect, useDispatch, useSelector } from "react-redux";

import {
  SearchContainer,
  WeatherDashboardContainer,
} from "./weather-dashboard.styles";
import FormInput from "../../components/form-input/form-input.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { fetchWeatherInformationStart } from "../../redux/weather/weather.actions";
import WeatherByHour from "../../components/weather-by-hour/weather-by-hour.component";
import CurrentTemperatureAndStats from "../../components/current-temperature-and-stats";
import WeatherForecast from "../../components/weather-forecast/weather-forecast.component";
import LocationAndDate from "../../components/location-and-date/location-and-date.component";

const WeatherDashboard = () => {
  const [query, setQuery] = useState("");

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

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = () => {
    dispatch(fetchWeatherInformationStart(query));
  };

  return (
    <WeatherDashboardContainer>
      <SearchContainer>
        <FormInput
          name="search"
          value={query}
          handleChange={handleChange}
          label="Search"
        />
        <CustomButton onSearch={onSubmit}>Search</CustomButton>
      </SearchContainer>
      {weatherState ? (
        <React.Fragment>
          <LocationAndDate location={weatherState.location} />
          <CurrentTemperatureAndStats current={weatherState.current} />
          <WeatherByHour hourly={weatherState.hourly} />
          <WeatherForecast forecast={weatherState.forecast} />
        </React.Fragment>
      ) : (
        <WithSpinner />
      )}
    </WeatherDashboardContainer>
  );
};

const mapStateToProps = ({ weather }) => {
  const { weather_data } = weather;
  return { weather_data };
};

export default connect(mapStateToProps)(WeatherDashboard);
