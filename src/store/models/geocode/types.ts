import { Geocode } from 'models/geocode';

export interface GeocodeState {
  fetching: boolean;
  error: boolean;
  data: {
    searchResults: Record<string, GeocodeSearchResults>;
    locationData: GeocodeLocationData;
  };
}

export interface GeocodeFetchRequestPayload {
  placename: string;
}

export interface GeocodeFetchSuccessPayload {
  placename: string;
  searchResult: GeocodeSearchResults;
  locationData: Record<string, Geocode>;
}

export type DenormalizedGeocodeSearchResults = Geocode[];

export type GeocodeSearchResults = string[];

export type GeocodeLocationData = Record<string, Geocode>;
