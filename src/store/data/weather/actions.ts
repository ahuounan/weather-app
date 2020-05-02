import { createAction, ActionsUnion } from 'types/store';

import { WeatherFetchResponsePayload, WeatherFetchRequestPayload } from './types';

export enum WeatherActionTypes {
  WEATHER_FETCH_REQUEST = '[WEATHER] FETCH_REQUEST',
  WEATHER_FETCH_FAILURE = '[WEATHER] FETCH_FAILURE',
  WEATHER_FETCH_SUCCESS = '[WEATHER] FETCH_SUCCESS'
}

export const WeatherActions = {
  fetchWeatherRequest: (payload: WeatherFetchRequestPayload) =>
    createAction(WeatherActionTypes.WEATHER_FETCH_REQUEST, payload),
  fetchWeatherFailure: () => createAction(WeatherActionTypes.WEATHER_FETCH_FAILURE),
  fetchWeatherSuccess: (payload: WeatherFetchResponsePayload) =>
    createAction(WeatherActionTypes.WEATHER_FETCH_SUCCESS, payload)
};

export type WeatherActions = ActionsUnion<typeof WeatherActions>;
