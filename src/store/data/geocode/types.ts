import { Geocode } from 'models/geocode';

export interface GeocodeState {
  fetching: boolean;
  error: boolean;
  searchResults: Record<string, GeocodeSearchResults>;
  locationData: GeocodeLocationData;
}

export interface GeocodeFetchRequestPayload {
  placename: string;
}

export interface GeocodeFetchSuccessPayload {
  placename: string;
  searchResults: GeocodeSearchResults;
  locationData: Record<string, Geocode>;
}

export interface GeocodeSearchResults {
  resultIds: string[];
}

export type GeocodeLocationData = Record<string, Geocode>;
