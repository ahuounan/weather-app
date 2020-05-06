import { RootState } from 'store/types';

const getState = (state: RootState) => state.view.search;
const getQuery = (state: RootState) => getState(state).query;

export const searchSelectors = {
  getState,
  getQuery
};
