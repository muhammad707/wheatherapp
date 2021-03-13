import { takeLatest, call, put } from "redux-saga/effects";
import { FETCH_WEATHER_INFORMATION_START } from "./weather.types";

import {
  fetchWeatherInformationSuccess,
  fetchWeatherInformationFailure,
} from "./weather.actions";
import axios from "axios";

const getWeatherInformationAsync = async (query) =>
  await axios({
    method: "GET",
    baseURL: "http://http://api.weatherstack.com",
    url: `/current/${query}`,
  });

function* getWeatherInformation() {
  try {
    const response = yield call(getWeatherInformationAsync);
    console.log(response);
    yield put(fetchWeatherInformationSuccess(response));
  } catch (e) {
    yield put(fetchWeatherInformationFailure(e));
    console.log(e);
  }
}

export function* fetchWeatherInformationStart() {
  yield takeLatest(FETCH_WEATHER_INFORMATION_START, getWeatherInformation);
}
