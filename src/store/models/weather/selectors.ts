import { RootState } from 'store/types';

const getState = (state: RootState) => state.models.weather;
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
