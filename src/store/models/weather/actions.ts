import { createAction, ActionsUnion } from 'types/store';

import {
  WeatherFetchSuccessPayload,
  WeatherFetchRequestPayload,
  WeatherStartSubscriptionPayload
} from './types';

export enum WeatherActionTypes {
  RETURN_CACHED = '[WEATHER] RETURN_CACHED',
  FETCH_REQUEST = '[WEATHER] FETCH_REQUEST',
  FETCH_FAILURE = '[WEATHER] FETCH_FAILURE',
  FETCH_SUCCESS = '[WEATHER] FETCH_SUCCESS',
  START_SUBSCRIPTION = '[WEATHER] START_SUBSCRIPTION',
  STOP_SUBSCRIPTION = '[WEATHER] STOP_SUBSCRIPTION'
}

export const WeatherActions = {
  returnCached: () => createAction(WeatherActionTypes.RETURN_CACHED),
  fetchRequest: (payload: WeatherFetchRequestPayload) =>
    createAction(WeatherActionTypes.FETCH_REQUEST, payload),
  fetchFailure: (payload: string) => createAction(WeatherActionTypes.FETCH_FAILURE, payload),
  fetchSuccess: (payload: WeatherFetchSuccessPayload) =>
    createAction(WeatherActionTypes.FETCH_SUCCESS, payload),
  startSubscription: (payload: WeatherStartSubscriptionPayload) =>
    createAction(WeatherActionTypes.START_SUBSCRIPTION, payload),
  stopSubscription: () => createAction(WeatherActionTypes.STOP_SUBSCRIPTION)
};

export type WeatherActions = ActionsUnion<typeof WeatherActions>;
