import { combineReducers } from 'redux';
import { collectionsReducer } from './example/reducer';

export const rootReducer = combineReducers({
  collections: collectionsReducer
});
