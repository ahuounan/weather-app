import { RootState } from 'store/types';

import { dataSelectors } from '../selectors';
import { geocodeTransformers } from './transformers';

const getState = (state: RootState) => dataSelectors.getState(state).geocode;
const getFetching = (state: RootState) => getState(state).fetching;
const getError = (state: RootState) => getState(state).error;
const getSearchResults = (state: RootState) => getState(state).searchResults;
const getLocationData = (state: RootState) => getState(state).locationData;

const makeGetDataByKey = (key: string) => (state: RootState) => getLocationData(state)[key];

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
  makeGetDataByKey,
  makeGetDenormalizedSearchResult
};
