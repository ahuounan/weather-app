import { combineReducers } from 'redux';

import { backgroundPhotoReducer } from './backgroundPhoto/reducer';
import { geocodeReducer } from './geocode/reducer';
import { weatherReducer } from './weather/reducer';

export const modelReducer = combineReducers({
  geocode: geocodeReducer,
  weather: weatherReducer,
  backgroundPhoto: backgroundPhotoReducer
});
