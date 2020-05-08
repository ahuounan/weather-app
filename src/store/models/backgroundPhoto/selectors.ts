import { RootState } from 'store/types';
import { Location } from 'models/location';
import { getKey } from '../utils';

const getFetching = (state: RootState) => state.models.backgroundPhoto.fetching;
const getError = (state: RootState) => state.models.backgroundPhoto.error;
const getData = (state: RootState) => state.models.backgroundPhoto.data;

const makeGetDataByLocation = (location: Location) => (state: RootState) =>
  getData(state)[getKey(location)];

export const backgroundPhotoSelectors = {
  getFetching,
  getError,
  getData,
  makeGetDataByLocation
};
