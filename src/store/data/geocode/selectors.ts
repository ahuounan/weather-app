import { getKey } from 'models/utils';

import { RootState } from 'store/types';
import { searchSelectors } from 'store/view/search/selectors';
import { weatherViewSelectors } from 'store/view/weather/selectors';

import { geocodeTransformers } from './transformers';

const getState = (state: RootState) => state.data.geocode;
const getFetching = (state: RootState) => getState(state).fetching;
const getError = (state: RootState) => getState(state).error;
const getSearchResults = (state: RootState) => getState(state).searchResults;
const getLocationData = (state: RootState) => getState(state).locationData;
const getLocationLabel = (state: RootState) => {
  const { lat, lng } = weatherViewSelectors.getLocation(state);

  return getLocationData(state)[getKey(lat, lng)].label;
};

const getCurrentSearchResult = (state: RootState) => {
  const query = searchSelectors.getQuery(state);
  const searchResults = getSearchResults(state);

  return searchResults[query];
};

const getDenormalizedCurrentSearchResult = (state: RootState) => {
  const searchResult = getCurrentSearchResult(state);
  const locationData = getLocationData(state);

  return geocodeTransformers.denormalizeResults(searchResult, locationData);
};

export const geocodeSelectors = {
  getFetching,
  getError,
  getSearchResults,
  getLocationData,
  getCurrentSearchResult,
  getLocationLabel,
  getDenormalizedCurrentSearchResult
};
