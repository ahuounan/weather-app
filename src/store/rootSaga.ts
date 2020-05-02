import { all } from 'redux-saga/effects';
import { WeatherSagas } from './data/weather/sagas';
import { GeocodeSagas } from './data/geocode/sagas';

export function* rootSaga() {
  yield all([...WeatherSagas, ...GeocodeSagas]);
}
