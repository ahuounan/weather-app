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
): { searchResult: GeocodeSearchResults; locationData: GeocodeLocationData } => {
  const searchResult: GeocodeSearchResults = [];
  const locationData: GeocodeLocationData = {};

  openCageApiResponse.results.forEach(result => {
    const id = getKey({ lat: result.geometry.lat, lng: result.geometry.lng });
    if (locationData[id]) {
      return;
    }
    searchResult.push(id);
    locationData[id] = openCageApiResultToGeocode(result);
  });
  return {
    searchResult,
    locationData
  };
};

const denormalizeResults = (
  searchResults: GeocodeSearchResults,
  locationData: GeocodeLocationData
): DenormalizedGeocodeSearchResults => searchResults?.map(resultId => locationData[resultId]);

export const geocodeTransformers = {
  openCageApiResultToGeocode,
  normalizeOpenCageApiResponse,
  denormalizeResults,
  cleanQuery
};
