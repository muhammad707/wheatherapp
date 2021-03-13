import { all, call } from "redux-saga/effects";
import { fetchWeatherInformationStart } from "./weather/weather.sagas";

export default function* rootSaga() {
  yield all([call(fetchWeatherInformationStart)]);
}
