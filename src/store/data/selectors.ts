import { RootState } from 'store/types';

const getState = (state: RootState) => state.data;

export const dataSelectors = {
  getState
};
