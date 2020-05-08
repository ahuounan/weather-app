import { call, put, takeLatest, race, delay, take, select } from 'typed-redux-saga';

import { Location } from 'models/location';

import { BasicAction } from 'types/store';

import { WeatherActionTypes, WeatherActions } from './actions';
import { WeatherApi } from './api';
import { weatherSelectors } from './selectors';
import { weatherTransformers } from './transformers';
import { WeatherFetchRequestPayload, WeatherStartSubscriptionPayload } from './types';

function* handleWeatherFetchRequest(payload: WeatherFetchRequestPayload) {
  try {
    const { location } = payload;

    const getWeatherDataByLocation = weatherSelectors.makeGetDataByLocation(location);
    const weather = yield* select(getWeatherDataByLocation);

    const currentWeatherTime = weather?.current.time ?? 0;

    if (Date.now() - currentWeatherTime * 1000 < 60 * 60 * 60 * 1000) {
      yield* put(WeatherActions.returnCached());
      return;
    }

    const { response, data } = yield* call(WeatherApi.get, location);
    if (!response.ok) throw new Error('Api fail');

    const transformedData = weatherTransformers.openWeatherOneCallResponseToWeather(data);
    yield* put(WeatherActions.fetchSuccess({ weather: transformedData }));
  } catch (e) {
    console.warn('>>>handleWeatherFetchRequest error', e);
    yield* put(WeatherActions.fetchFailure(e.message));
  }
}

function* pollWeatherApi(location: Location) {
  while (true) {
    yield* call(handleWeatherFetchRequest, { location });
    yield* delay(60 * 60 * 60 * 1000);
  }
}

function* handleStartWeatherSubscription(action: BasicAction<WeatherStartSubscriptionPayload>) {
  const { location } = action.payload;

  yield* race([call(pollWeatherApi, location), take(WeatherActionTypes.STOP_SUBSCRIPTION)]);
}

export const WeatherSagas = [
  takeLatest(WeatherActionTypes.START_SUBSCRIPTION, handleStartWeatherSubscription)
];
