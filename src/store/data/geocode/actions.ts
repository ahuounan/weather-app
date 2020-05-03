import { createAction, ActionsUnion } from 'types/store';

import {
  GeocodeFetchResponsePayload,
  GeocodeFetchRequestPayload,
  GeocodeQueryPayload
} from './types';

export enum GeocodeActionTypes {
  GEOCODE_FETCH_REQUEST = '[GEOCODE] FETCH_REQUEST',
  GEOCODE_FETCH_FAILURE = '[GEOCODE] FETCH_FAILURE',
  GEOCODE_FETCH_SUCCESS = '[GEOCODE] FETCH_SUCCESS',
  GEOCODE_RETURN_CACHED = '[GEOCODE] RETURN_CACHED',
  GEOCODE_QUERY = '[GEOCODE] QUERY'
}

export const GeocodeActions = {
  geocodeFetchRequest: (payload: GeocodeFetchRequestPayload) =>
    createAction(GeocodeActionTypes.GEOCODE_FETCH_REQUEST, payload),
  geocodeFetchFailure: () => createAction(GeocodeActionTypes.GEOCODE_FETCH_FAILURE),
  geocodeFetchSuccess: (payload: GeocodeFetchResponsePayload) =>
    createAction(GeocodeActionTypes.GEOCODE_FETCH_SUCCESS, payload),
  geocodeReturnCached: () => createAction(GeocodeActionTypes.GEOCODE_RETURN_CACHED),
  geocodeQuery: (payload: GeocodeQueryPayload) =>
    createAction(GeocodeActionTypes.GEOCODE_QUERY, payload)
};

export type GeocodeActions = ActionsUnion<typeof GeocodeActions>;
