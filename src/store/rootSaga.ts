import { all } from 'redux-saga/effects';

import { BackgroundPhotoSagas } from './models/backgroundPhoto/sagas';
import { GeocodeSagas } from './models/geocode/sagas';
import { WeatherSagas } from './models/weather/sagas';

import { LocationSagas } from './view/location/sagas';
import { SettingsSagas } from './view/settings/sagas';
import { QuerySagas } from './view/query/sagas';

export function* rootSaga() {
  yield all([
    ...WeatherSagas,
    ...GeocodeSagas,
    ...BackgroundPhotoSagas,
    ...QuerySagas,
    ...LocationSagas,
    ...SettingsSagas
  ]);
}
