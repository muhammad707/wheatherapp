import {
  FETCH_WEATHER_INFORMATION_FAILURE,
  FETCH_WEATHER_INFORMATION_START,
  FETCH_WEATHER_INFORMATION_SUCCESS,
} from "./weather.types";

export const fetchWeatherInformationStart = () => ({
  type: FETCH_WEATHER_INFORMATION_START,
});

export const fetchWeatherInformationSuccess = (data) => ({
  type: FETCH_WEATHER_INFORMATION_SUCCESS,
  payload: data,
});

export const fetchWeatherInformationFailure = (error) => ({
  type: FETCH_WEATHER_INFORMATION_FAILURE,
  payload: error,
});
