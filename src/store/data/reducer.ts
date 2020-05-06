import { combineReducers } from 'redux';

import { geocodeReducer } from './geocode/reducer';
import { weatherReducer } from './weather/reducer';

export const dataReducer = combineReducers({
  geocode: geocodeReducer,
  weather: weatherReducer
});
