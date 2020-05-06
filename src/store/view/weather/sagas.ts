import { takeLatest } from 'typed-redux-saga';

import { BasicAction } from 'types/store';

import { WeatherViewActionTypes } from './actions';
import { SetLocationPayload } from './types';
import { storage } from 'services';

function* handleSetLocation(action: BasicAction<SetLocationPayload>) {
  const {
    payload: { lat, lng }
  } = action;

  storage.location.set({ lat, lng });
}

export const WeatherViewSagas = [
  takeLatest(WeatherViewActionTypes.SET_LOCATION, handleSetLocation)
];
