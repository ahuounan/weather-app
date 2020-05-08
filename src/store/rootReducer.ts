import { combineReducers } from 'redux';

import { modelReducer } from './models/reducer';
import { viewReducer } from './view/reducer';

export const rootReducer = combineReducers({
  models: modelReducer,
  view: viewReducer
});
