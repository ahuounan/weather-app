import { combineReducers } from 'redux';

import { queryReducer } from './query/reducer';
import { settingsReducer } from './settings/reducer';
import { locationReducer } from './location/reducer';

export const viewReducer = combineReducers({
  query: queryReducer,
  location: locationReducer,
  settings: settingsReducer
});
