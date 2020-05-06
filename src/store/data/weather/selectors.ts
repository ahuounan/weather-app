import { RootState } from 'store/types';

import { dataSelectors } from '../selectors';

const getState = (state: RootState) => dataSelectors.getState(state).weather;
const getFetching = (state: RootState) => getState(state).fetching;
const getError = (state: RootState) => getState(state).error;
const getPolling = (state: RootState) => getState(state).polling;
const getData = (state: RootState) => getState(state).data;

const makeGetDataByKey = (key: string) => (state: RootState) => getData(state)[key];

export const weatherSelectors = {
  getFetching,
  getError,
  getPolling,
  getData,
  makeGetDataByKey
};
