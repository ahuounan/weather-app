import {
  GeocodeFetchResponsePayload,
  OpenCageApiResult,
  GeocodeResult,
  GeocodeResults
} from './types';

const geocodeQuery = (placename: string) => placename?.trim().toLowerCase();

const geocodeResponseResults = (rawResult: OpenCageApiResult): GeocodeResult => ({
  confidence: rawResult.confidence,
  label: rawResult.formatted,
  geometry: rawResult.geometry,
  id: rawResult.annotations.geohash
});

const geocodeResponse = (rawData: GeocodeFetchResponsePayload): GeocodeResults => {
  return {
    placename: rawData.placename,
    timestamp: rawData.data.timestamp.created_unix,
    results: rawData.data.results.map(geocodeResponseResults)
  };
};

export const geocodeTransformers = {
  geocodeResponseResults,
  geocodeResponse,
  geocodeQuery
};
