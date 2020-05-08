import { Location } from 'models/location';

import { RootState } from 'store/types';
import { getKey } from '../utils';

const getState = (state: RootState) => state.models.weather;
const getFetching = (state: RootState) => getState(state).fetching;
const getError = (state: RootState) => getState(state).error;
const getPolling = (state: RootState) => getState(state).polling;
const getData = (state: RootState) => getState(state).data;

const makeGetDataByLocation = (location: Location) => (state: RootState) =>
  getData(state)[getKey(location)];

export const weatherSelectors = {
  getFetching,
  getError,
  getPolling,
  getData,
  makeGetDataByLocation
};
