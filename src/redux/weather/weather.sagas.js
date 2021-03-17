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
    // baseURL: "http://http://api.weatherstack.com",
    url: `/${query}`,
  });

function* getWeatherInformation({ payload }) {
  try {
    const response = yield call(getWeatherInformationAsync, payload);
    console.log(response);
    yield put(fetchWeatherInformationSuccess(response.data));
  } catch (e) {
    yield put(fetchWeatherInformationFailure(e));
    console.log(e);
  }
}

export function* fetchWeatherInformationStart() {
  yield takeLatest(FETCH_WEATHER_INFORMATION_START, getWeatherInformation);
}
