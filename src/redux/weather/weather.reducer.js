import {
  FETCH_WEATHER_INFORMATION_START,
  FETCH_WEATHER_INFORMATION_FAILURE,
  FETCH_WEATHER_INFORMATION_SUCCESS,
} from "./weather.types";

const INITIAL_STATE = {
  weather_data: null,
  loading: false,
  errorMessage: undefined,
};

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WEATHER_INFORMATION_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WEATHER_INFORMATION_SUCCESS:
      return {
        ...state,
        loading: false,
        weather_data: action.payload,
      };
    case FETCH_WEATHER_INFORMATION_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default weatherReducer;
