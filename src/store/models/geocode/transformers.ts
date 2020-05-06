import { OpenCageApiResponse, OpenCageApiResult } from 'models/api/openCageApi';
import { Geocode } from 'models/geocode';
import { getKey } from 'store/models/utils';

import {
  GeocodeSearchResults,
  GeocodeLocationData,
  DenormalizedGeocodeSearchResults
} from './types';

const cleanQuery = (placename: string) => placename?.trim().toLowerCase();

const openCageApiResultToGeocode = (rawResult: OpenCageApiResult): Geocode => ({
  label: rawResult.formatted,
  lat: rawResult.geometry.lat,
  lng: rawResult.geometry.lng,
  id: getKey({ lat: rawResult.geometry.lat, lng: rawResult.geometry.lng })
});

const normalizeOpenCageApiResponse = (
  openCageApiResponse: OpenCageApiResponse
): { searchResults: GeocodeSearchResults; locationData: GeocodeLocationData } => {
  const searchResults: GeocodeSearchResults = {
    resultIds: []
  };
  const locationData: GeocodeLocationData = {};

  openCageApiResponse.results.forEach(result => {
    const id = getKey({ lat: result.geometry.lat, lng: result.geometry.lng });
    searchResults.resultIds.push(id);
    locationData[id] = openCageApiResultToGeocode(result);
  });
  return {
    searchResults,
    locationData
  };
};

const denormalizeResults = (
  searchResults: GeocodeSearchResults,
  locationData: GeocodeLocationData
): DenormalizedGeocodeSearchResults => {
  return {
    ...searchResults,
    results: searchResults?.resultIds.map(resultId => locationData[resultId])
  };
};

export const geocodeTransformers = {
  openCageApiResultToGeocode,
  normalizeOpenCageApiResponse,
  denormalizeResults,
  cleanQuery
};
