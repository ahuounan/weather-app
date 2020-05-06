import { combineReducers } from 'redux';

import { dataReducer } from './data/reducer';
import { viewReducer } from './view/reducer';

export const rootReducer = combineReducers({
  data: dataReducer,
  view: viewReducer
});
