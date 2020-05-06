import { combineReducers } from 'redux';

import { searchReducer } from './search/reducer';
import { weatherViewReducer } from './weather/reducer';
import { settingsReducer } from './settings/reducer';

export const viewReducer = combineReducers({
  search: searchReducer,
  weather: weatherViewReducer,
  settings: settingsReducer
});
