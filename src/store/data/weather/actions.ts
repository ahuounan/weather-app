import { createAction, ActionsUnion } from 'types/store';

import { WeatherFetchResponsePayload, WeatherFetchRequestPayload } from './types';

export enum WeatherActionTypes {
  WEATHER_RETURN_CACHED = '[WEATHER] RETURN_CACHED',
  WEATHER_FETCH_REQUEST = '[WEATHER] FETCH_REQUEST',
  WEATHER_FETCH_FAILURE = '[WEATHER] FETCH_FAILURE',
  WEATHER_FETCH_SUCCESS = '[WEATHER] FETCH_SUCCESS',
  WEATHER_START_SUBSCRIPTION = '[WEATHER] START_SUBSCRIPTION',
  WEATHER_STOP_SUBSCRIPTION = '[WEATHER] STOP_SUBSCRIPTION'
}

export const WeatherActions = {
  weatherReturnCached: (payload: WeatherFetchRequestPayload) =>
    createAction(WeatherActionTypes.WEATHER_RETURN_CACHED, payload),
  weatherFetchRequest: (payload: WeatherFetchRequestPayload) =>
    createAction(WeatherActionTypes.WEATHER_FETCH_REQUEST, payload),
  weatherFetchFailure: () => createAction(WeatherActionTypes.WEATHER_FETCH_FAILURE),
  weatherFetchSuccess: (payload: WeatherFetchResponsePayload) =>
    createAction(WeatherActionTypes.WEATHER_FETCH_SUCCESS, payload),
  weatherStartSubscription: (payload: WeatherFetchRequestPayload) =>
    createAction(WeatherActionTypes.WEATHER_START_SUBSCRIPTION, payload),
  weatherStopSubscription: () => createAction(WeatherActionTypes.WEATHER_STOP_SUBSCRIPTION)
};

export type WeatherActions = ActionsUnion<typeof WeatherActions>;
