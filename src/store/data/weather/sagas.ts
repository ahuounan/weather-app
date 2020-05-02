import { call, put, takeLatest } from 'redux-saga/effects';

import { WeatherActionTypes, WeatherActions } from './actions';
import { WeatherApi } from './api';
import { WeatherFetchRequestPayload } from './types';

function* handleWeatherFetchRequest(action: {
  type: WeatherActionTypes.WEATHER_FETCH_REQUEST;
  payload: WeatherFetchRequestPayload;
}) {
  try {
    const {
      payload: { lat, lon }
    } = action;
    const { response, data } = yield call(WeatherApi.get, lat, lon);
    if (!response.ok) throw new Error();

    yield put(WeatherActions.fetchWeatherSuccess(data));
  } catch (e) {
    yield put(WeatherActions.fetchWeatherFailure());
  }
}

export const WeatherSagas = [
  takeLatest(WeatherActionTypes.WEATHER_FETCH_REQUEST, handleWeatherFetchRequest)
];
