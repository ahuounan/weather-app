import { RootState } from 'store/types';

import { geocodeTransformers } from './transformers';

const getState = (state: RootState) => state.models.geocode;
const getFetching = (state: RootState) => getState(state).fetching;
const getError = (state: RootState) => getState(state).error;
const getSearchResults = (state: RootState) => getState(state).searchResults;
const getLocationData = (state: RootState) => getState(state).locationData;

const makeGetDataByQuery = (query: string) => (state: RootState) => getLocationData(state)[query];

const makeGetDenormalizedSearchResult = (query: string) => (state: RootState) => {
  const searchResult = getSearchResults(state)[query];
  const locationData = getLocationData(state);

  return geocodeTransformers.denormalizeResults(searchResult, locationData);
};

export const geocodeSelectors = {
  getFetching,
  getError,
  getSearchResults,
  getLocationData,
  makeGetDataByQuery,
  makeGetDenormalizedSearchResult
};
