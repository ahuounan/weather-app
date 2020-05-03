import { RootState } from 'store/types';

import { geocodeTransformers } from './transformers';

const getSearchResultByQuery = (state: RootState, query: string) =>
  state.geocode.searchResults[query];

const getLocationData = (state: RootState) => state.geocode.locationData;

const getDenormalizedSearchResultByQuery = (state: RootState, query: string) => {
  const results = getSearchResultByQuery(state, query);
  const locationData = getLocationData(state);
  const denormalizedResults = geocodeTransformers.denormalizeResults(results, locationData);
  return denormalizedResults;
};

const getDataById = (state: RootState, id?: string) =>
  id ? state.geocode.locationData[id] : undefined;

const getIsFetching = (state: RootState) => state.geocode.fetching;

const getError = (state: RootState) => state.geocode.error;

export const geocodeSelectors = {
  getSearchResultByQuery,
  getLocationData,
  getDenormalizedSearchResultByQuery,
  getDataById,
  getIsFetching,
  getError
};
