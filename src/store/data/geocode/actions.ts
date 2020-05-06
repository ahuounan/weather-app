import { createAction, ActionsUnion } from 'types/store';

import { GeocodeFetchRequestPayload, GeocodeFetchSuccessPayload } from './types';

export enum GeocodeActionTypes {
  FETCH_REQUEST = '[GEOCODE] FETCH_REQUEST',
  FETCH_FAILURE = '[GEOCODE] FETCH_FAILURE',
  FETCH_SUCCESS = '[GEOCODE] FETCH_SUCCESS',
  RETURN_CACHED = '[GEOCODE] RETURN_CACHED',
  QUERY = '[GEOCODE] QUERY'
}

export const GeocodeActions = {
  fetchRequest: (payload: GeocodeFetchRequestPayload) =>
    createAction(GeocodeActionTypes.FETCH_REQUEST, payload),
  fetchFailure: (payload: string) => createAction(GeocodeActionTypes.FETCH_FAILURE, payload),
  fetchSuccess: (payload: GeocodeFetchSuccessPayload) =>
    createAction(GeocodeActionTypes.FETCH_SUCCESS, payload),
  returnCached: () => createAction(GeocodeActionTypes.RETURN_CACHED),
  query: (payload: GeocodeFetchRequestPayload) => createAction(GeocodeActionTypes.QUERY, payload)
};

export type GeocodeActions = ActionsUnion<typeof GeocodeActions>;
