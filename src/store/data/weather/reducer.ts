import { WeatherActionTypes, WeatherActions } from './actions';

const initialState = {
  fetching: false,
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
          [`${lat}.${lon}`]: action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
};
