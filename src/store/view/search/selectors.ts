import { RootState } from 'store/types';

const getQuery = (state: RootState) => state.view.search.query;

export const searchSelectors = {
  getQuery
};
