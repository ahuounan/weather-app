import { RootState } from 'store/types';

const getState = (state: RootState) => state.view.query;
const getQuery = (state: RootState) => getState(state).query;

export const querySelectors = {
  getState,
  getQuery
};
