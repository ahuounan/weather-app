import { RootState } from 'store/types';

import { viewSelectors } from '../selectors';

const getState = (state: RootState) => viewSelectors.getState(state).search;
const getQuery = (state: RootState) => getState(state).query;

export const searchSelectors = {
  getState,
  getQuery
};
