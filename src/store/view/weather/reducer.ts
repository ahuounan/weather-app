import { WeatherViewActions, WeatherViewActionTypes } from './actions';
import { WeatherViewState } from './types';

const initialState: WeatherViewState = {
  lat: undefined,
  lng: undefined
};

export const weatherViewReducer = (state = initialState, action: WeatherViewActions) => {
  switch (action.type) {
    case WeatherViewActionTypes.SET_LOCATION: {
      const { lat, lng } = action.payload;
      return {
        ...state,
        lat,
        lng
      };
    }
    default: {
      return state;
    }
  }
};
