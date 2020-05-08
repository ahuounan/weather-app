import { all } from 'redux-saga/effects';

import { BackgroundPhotoSagas } from './models/backgroundPhoto/sagas';
import { GeocodeSagas } from './models/geocode/sagas';
import { WeatherSagas } from './models/weather/sagas';

import { WeatherViewSagas } from './view/weather/sagas';
import { SettingsSagas } from './view/settings/sagas';

export function* rootSaga() {
  yield all([
    ...WeatherSagas,
    ...GeocodeSagas,
    ...BackgroundPhotoSagas,
    ...WeatherViewSagas,
    ...SettingsSagas
  ]);
}
