import { call, put, takeLatest, race, delay, take, select } from 'typed-redux-saga';

import { getLocationWeather } from 'store/selectors';
import { weatherViewSelectors } from 'store/view/weather/selectors';

import { WeatherActionTypes, WeatherActions } from './actions';
import { WeatherApi } from './api';
import { weatherTransformers } from './transformers';

function* handleWeatherFetchRequest() {
  try {
    const locationWeather = yield* select(getLocationWeather);
    const cachedTimeStamp = locationWeather?.current.time;

    if (Date.now() - cachedTimeStamp * 1000 < 60 * 60 * 60 * 1000) {
      yield* put(WeatherActions.returnCached());
      return;
    }

    const { lat, lng } = yield* select(weatherViewSelectors.getLocation);
    if (!lat || !lng) throw new Error('malformed location data');

    const { response, data } = yield* call(WeatherApi.get, lat, lng);
    if (!response.ok) throw new Error('Api fail');

    const transformedData = weatherTransformers.openWeatherOneCallResponseToWeather(data);
    yield* put(WeatherActions.fetchSuccess(transformedData));
  } catch (e) {
    console.warn('>>>handleWeatherFetchRequest error', e);
    yield* put(WeatherActions.fetchFailure(e.message));
  }
}

function* pollWeatherApi() {
  while (true) {
    yield* put(WeatherActions.fetchRequest());
    yield* delay(60 * 60 * 60 * 1000);
  }
}

function* handleStartWeatherSubscription() {
  yield* race([call(pollWeatherApi), take(WeatherActionTypes.STOP_SUBSCRIPTION)]);
}

export const WeatherSagas = [
  takeLatest(WeatherActionTypes.FETCH_REQUEST, handleWeatherFetchRequest),
  takeLatest(WeatherActionTypes.START_SUBSCRIPTION, handleStartWeatherSubscription)
];
