import { takeLatest, put } from 'typed-redux-saga';

import { BasicAction } from 'types/store';

import { LocationActionTypes } from './actions';
import { SetLocationPayload } from './types';
import { BackgroundPhotoActions } from 'store/models/backgroundPhoto/actions';
import { WeatherActions } from 'store/models/weather/actions';

function* handleSetLocation(action: BasicAction<SetLocationPayload>) {
  const { location } = action.payload;

  yield* put(WeatherActions.stopSubscription());
  yield* put(BackgroundPhotoActions.fetchRequest({ location }));
  yield* put(WeatherActions.startSubscription({ location }));
}

export const LocationSagas = [takeLatest(LocationActionTypes.SET, handleSetLocation)];
