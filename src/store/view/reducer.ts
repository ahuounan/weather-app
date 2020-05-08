import { combineReducers } from 'redux';

import { searchReducer } from './search/reducer';
import { settingsReducer } from './settings/reducer';
import { weatherViewReducer } from './weather/reducer';

export const viewReducer = combineReducers({
  search: searchReducer,
  settings: settingsReducer,
  weather: weatherViewReducer
});
