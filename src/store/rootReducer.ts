import { combineReducers } from 'redux';

import { weatherReducer } from './data/weather/reducer';
import { geocodeReducer } from './data/geocode/reducer';

export const rootReducer = combineReducers({
  weather: weatherReducer,
  geocode: geocodeReducer
});
