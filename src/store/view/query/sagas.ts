import { takeLatest, put } from 'typed-redux-saga';

import { BasicAction } from 'types/store';

import { QueryActionTypes } from './actions';
import { UpdateQueryPayload } from './types';
import { GeocodeActions } from 'store/models/geocode/actions';

function* handleUpdateQuery(action: BasicAction<UpdateQueryPayload>) {
  const { query } = action.payload;

  yield* put(GeocodeActions.query({ placename: query }));
}

export const QuerySagas = [takeLatest(QueryActionTypes.UPDATE, handleUpdateQuery)];
