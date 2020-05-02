import { memoize } from 'lodash';

import {
  GeocodeFetchResponsePayload,
  OpenCageApiResult,
  GeocodeResult,
  GeocodeSearchResults,
  GeocodeLocationData
} from './types';

const geocodeQuery = (placename: string) => placename?.trim().toLowerCase();

const transformResult = (rawResult: OpenCageApiResult): GeocodeResult => ({
  confidence: rawResult.confidence,
  label: rawResult.formatted,
  geometry: rawResult.geometry,
  id: rawResult.annotations.geohash
});

const normalizeResponse = memoize(
  (
    rawData: GeocodeFetchResponsePayload
  ): {
    placename: string;
    searchResults: GeocodeSearchResults;
    locationData: GeocodeLocationData;
  } => {
    const searchResults: GeocodeSearchResults = {
      placename: rawData.placename,
      timestamp: rawData.data.timestamp.created_unix,
      resultIds: []
    };
    const locationData: GeocodeLocationData = {};

    rawData.data.results.forEach(result => {
      const id = result.annotations.geohash;
      searchResults.resultIds.push(id);
      locationData[id] = transformResult(result);
    });
    return {
      placename: rawData.placename,
      searchResults,
      locationData
    };
  },
  (rawData: GeocodeFetchResponsePayload) => rawData.placename
);

const denormalizeResults = (
  searchResults: GeocodeSearchResults,
  locationData: GeocodeLocationData
) => {
  return {
    ...searchResults,
    results: searchResults?.resultIds.map(resultId => locationData[resultId])
  };
};

export const geocodeTransformers = {
  transformResult,
  normalizeResponse,
  denormalizeResults,
  geocodeQuery
};
