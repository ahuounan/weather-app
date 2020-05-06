import { storage } from 'services';

import { WeatherViewActions, WeatherViewActionTypes } from './actions';
import { WeatherViewState } from './types';

const { lat, lng } = storage.location.get() || {};

const initialState: WeatherViewState = {
  lat,
  lng
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
