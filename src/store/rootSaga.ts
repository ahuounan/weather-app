import { all } from 'redux-saga/effects';
import { PaintingsSagas } from './example/sagas';

export function* rootSaga() {
  yield all([...PaintingsSagas]);
}
