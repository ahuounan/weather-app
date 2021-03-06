import { RootState } from 'store/types';

import { Location } from 'models/location';

import { getKey } from '../utils';

import { geocodeTransformers } from './transformers';

const getState = (state: RootState) => state.models.geocode;
const getFetching = (state: RootState) => getState(state).fetching;
const getError = (state: RootState) => getState(state).error;
const getData = (state: RootState) => getState(state).data;
const getSearchResults = (state: RootState) => getState(state).data.searchResults;
const getLocationData = (state: RootState) => getState(state).data.locationData;

const makeGetResultsByQuery = (query: string) => (state: RootState) =>
  getSearchResults(state)[query];

const makeGetDenormalizedSearchResult = (query: string) => (state: RootState) => {
  const searchResult = getSearchResults(state)[query];
  const locationData = getLocationData(state);
  const result = geocodeTransformers.denormalizeResults(searchResult, locationData);

  return result;
};

const makeGetDataByLocation = (location: Location) => (state: RootState) => {
  const key = getKey(location);

  return getLocationData(state)[key];
};

export const geocodeSelectors = {
  getState,
  getFetching,
  getError,
  getData,
  getSearchResults,
  getLocationData,
  makeGetResultsByQuery,
  makeGetDenormalizedSearchResult,
  makeGetDataByLocation
};
