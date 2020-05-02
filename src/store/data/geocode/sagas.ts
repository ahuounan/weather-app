import { call, put, select, debounce, takeLatest } from 'typed-redux-saga';

import { GeocodeActionTypes, GeocodeActions } from './actions';
import { GeocodeApi } from './api';
import { GeocodeFetchRequestPayload, GeocodeQueryPayload } from './types';
import { geocodeTransformers } from './transformers';
import { geocodeSelectors } from './selectors';
import { BasicAction } from 'types/store';

function* handleGeocodeQuery(action: BasicAction<GeocodeQueryPayload>) {
  const {
    payload: { placename }
  } = action;

  const cleanedQuery = geocodeTransformers.geocodeQuery(placename);
  const existingData = yield* select(geocodeSelectors.getGeocodeResults, cleanedQuery);

  if (existingData) {
    yield put(GeocodeActions.geocodeReturnCached());
    return;
  }

  yield put(GeocodeActions.geocodeFetchRequest({ placename: cleanedQuery }));
}

function* handleGeocodeFetchRequest(action: BasicAction<GeocodeFetchRequestPayload>) {
  try {
    const {
      payload: { placename }
    } = action;
    const { response, data } = yield* call(GeocodeApi.get, placename);

    if (!response.ok) throw new Error();

    yield put(GeocodeActions.geocodeFetchSuccess({ placename, data }));
  } catch (e) {
    yield put(GeocodeActions.geocodeFetchFailure());
  }
}

export const GeocodeSagas = [
  takeLatest(GeocodeActionTypes.GEOCODE_QUERY, handleGeocodeQuery),
  debounce(1000, GeocodeActionTypes.GEOCODE_FETCH_REQUEST, handleGeocodeFetchRequest)
];
