import { call, put, select, debounce, takeLatest } from 'typed-redux-saga';
import { BasicAction } from 'types/store';

import { GeocodeActionTypes, GeocodeActions } from './actions';
import { GeocodeApi } from './api';
import { GeocodeFetchRequestPayload, GeocodeQueryPayload } from './types';
import { geocodeTransformers } from './transformers';
import { geocodeSelectors } from './selectors';

function* handleGeocodeQuery(action: BasicAction<GeocodeQueryPayload>) {
  const {
    payload: { placename }
  } = action;

  const cleanedQuery = geocodeTransformers.geocodeQuery(placename);
  yield put(GeocodeActions.geocodeFetchRequest({ placename: cleanedQuery }));
}

function* handleGeocodeFetchRequest(
  action: BasicAction<GeocodeFetchRequestPayload>
) {
  try {
    const {
      payload: { placename }
    } = action;
    const existingData = yield* select(
      geocodeSelectors.getSearchResultByQuery,
      placename
    );

    if (existingData) {
      yield put(GeocodeActions.geocodeReturnCached());
      return;
    }

    if (placename.length < 2) {
      throw new Error('placename too short');
    }

    const { response, data } = yield* call(GeocodeApi.get, placename);
    if (!response.ok) throw new Error();

    yield put(GeocodeActions.geocodeFetchSuccess({ placename, data }));
  } catch (e) {
    console.error('>>>handleGeocodeFetchRequest', e);
    yield put(GeocodeActions.geocodeFetchFailure());
  }
}

export const GeocodeSagas = [
  takeLatest(GeocodeActionTypes.GEOCODE_QUERY, handleGeocodeQuery),
  debounce(
    500,
    GeocodeActionTypes.GEOCODE_FETCH_REQUEST,
    handleGeocodeFetchRequest
  )
];
