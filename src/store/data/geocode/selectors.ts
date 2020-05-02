import { RootState } from '../types';

const getGeocodeResults = (state: RootState, query: string) => state.geocode.data[query];

const getGeocodeResultByRanking = (state: RootState, query: string, ranking: number) => {
  const results = getGeocodeResults(state, query);
  if (!results) return [];

  return ranking < results.results.length ? results.results[ranking] : [];
};

const getIsFetching = (state: RootState) => state.geocode.fetching;

const getError = (state: RootState) => state.geocode.error;

export const geocodeSelectors = {
  getGeocodeResults,
  getGeocodeResultByRanking,
  getIsFetching,
  getError
};
