import { call, put, takeLatest } from 'redux-saga/effects';

import { PaintingsActionTypes, PaintingsActions } from './actions';
import { PaintingsApi } from './api';

function* handlePaintingsFetchRequest() {
  try {
    const paintings = yield call(PaintingsApi.get);
    yield put(PaintingsActions.fetchPaintingsSuccess(paintings));
  } catch (e) {
    yield put(PaintingsActions.fetchPaintingsFailure());
  }
}

export const PaintingsSagas = [
  takeLatest(PaintingsActionTypes.PAINTINGS_FETCH_REQUEST, handlePaintingsFetchRequest)
];
