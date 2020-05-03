import { WeatherActionTypes, WeatherActions } from './actions';
import { getKey } from './utils';
import { weatherTransformers } from './transformers';

const initialState = {
  fetching: false,
  polling: false,
  error: false,
  data: {}
};

export const weatherReducer = (state = initialState, action: WeatherActions) => {
  switch (action.type) {
    case WeatherActionTypes.WEATHER_FETCH_REQUEST: {
      return {
        ...state,
        fetching: true
      };
    }
    case WeatherActionTypes.WEATHER_FETCH_FAILURE: {
      return {
        ...state,
        fetching: false,
        error: true
      };
    }
    case WeatherActionTypes.WEATHER_FETCH_SUCCESS: {
      const { lat, lon } = action.payload;

      return {
        ...state,
        fetching: false,
        error: false,
        data: {
          ...state.data,
          [getKey(lat, lon)]: weatherTransformers.openWeatherOneCallResponseToData(action.payload)
        }
      };
    }
    case WeatherActionTypes.WEATHER_RETURN_CACHED: {
      return {
        ...state,
        fetching: false,
        error: false
      };
    }
    case WeatherActionTypes.WEATHER_START_SUBSCRIPTION: {
      return {
        ...state,
        polling: true
      };
    }
    case WeatherActionTypes.WEATHER_STOP_SUBSCRIPTION: {
      return {
        ...state,
        polling: false
      };
    }
    default: {
      return state;
    }
  }
};
