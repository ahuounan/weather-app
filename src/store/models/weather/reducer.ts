import { getKey } from 'store/models/utils';

import { WeatherActionTypes, WeatherActions } from './actions';

const initialState = {
  fetching: false,
  polling: false,
  error: false,
  data: {}
};

export const weatherReducer = (state = initialState, action: WeatherActions) => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_REQUEST: {
      return {
        ...state,
        fetching: true
      };
    }
    case WeatherActionTypes.FETCH_FAILURE: {
      return {
        ...state,
        fetching: false,
        error: true
      };
    }
    case WeatherActionTypes.FETCH_SUCCESS: {
      const { weather } = action.payload;
      const { lat, lng } = weather;

      return {
        ...state,
        fetching: false,
        error: false,
        data: {
          ...state.data,
          [getKey({ lat, lng })]: weather
        }
      };
    }
    case WeatherActionTypes.RETURN_CACHED: {
      return {
        ...state,
        fetching: false,
        error: false
      };
    }
    case WeatherActionTypes.START_SUBSCRIPTION: {
      return {
        ...state,
        polling: true
      };
    }
    case WeatherActionTypes.STOP_SUBSCRIPTION: {
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
