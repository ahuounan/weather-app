import { RootState } from 'store/types';

const getState = (state: RootState) => state.view;

export const viewSelectors = {
  getState
};
