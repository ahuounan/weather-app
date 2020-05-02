import {
  call,
  put,
  takeLatest,
  race,
  delay,
  take,
  select
} from 'typed-redux-saga';

import { WeatherActionTypes, WeatherActions } from './actions';
import { WeatherApi } from './api';
import { WeatherFetchRequestPayload } from './types';
import { BasicAction } from 'types/store';
import { weatherSelectors } from './selectors';

function* handleWeatherFetchRequest(
  action: BasicAction<WeatherFetchRequestPayload>
) {
  try {
    const {
      payload: { lat, lng }
    } = action;

    const cachedTimeStamp = yield* select(
      weatherSelectors.getWeatherCurrentTimestamp,
      lat,
      lng
    );

    if (Date.now() - cachedTimeStamp * 1000 < 60 * 60 * 60 * 1000) {
      yield* put(WeatherActions.weatherReturnCached(action.payload));
      return;
    }

    const { response, data } = yield* call(WeatherApi.get, lat, lng);
    if (!response.ok) throw new Error();

    yield* put(WeatherActions.weatherFetchSuccess(data));
  } catch (e) {
    console.error('>>>handleWeatherFetchRequest error', e);
    yield* put(WeatherActions.weatherFetchFailure());
  }
}

function* pollWeatherApi(action: BasicAction<WeatherFetchRequestPayload>) {
  while (true) {
    yield* put(WeatherActions.weatherFetchRequest(action.payload));
    yield* delay(60 * 60 * 60 * 1000);
  }
}

function* handleStartWeatherSubscription(
  action: BasicAction<WeatherFetchRequestPayload>
) {
  yield* race([
    call(pollWeatherApi, action),
    take(WeatherActionTypes.WEATHER_STOP_SUBSCRIPTION)
  ]);
}

export const WeatherSagas = [
  takeLatest(
    WeatherActionTypes.WEATHER_FETCH_REQUEST,
    handleWeatherFetchRequest
  ),
  takeLatest(
    WeatherActionTypes.WEATHER_START_SUBSCRIPTION,
    handleStartWeatherSubscription
  )
];
