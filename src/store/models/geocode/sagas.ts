import { call, put, select, debounce, takeLatest } from 'typed-redux-saga';

import { storage } from 'services';

import { selectors } from 'store/selectors';

import { BasicAction } from 'types/store';

import { GeocodeActionTypes, GeocodeActions } from './actions';
import { GeocodeApi } from './api';
import { geocodeTransformers } from './transformers';
import { GeocodeFetchRequestPayload } from './types';

function* handleGeocodeQuery(action: BasicAction<GeocodeFetchRequestPayload>) {
  const {
    payload: { placename }
  } = action;

  const cleanedQuery = geocodeTransformers.cleanQuery(placename);

  const getQueryData = selectors.models.geocode.makeGetResultsByQuery(cleanedQuery);
  const existingData = yield* select(getQueryData);

  if (existingData) {
    yield put(GeocodeActions.returnCached());
    return;
  }

  if (placename.length < 2) {
    console.debug('>>>handleGeocodeQuery->Placename too short');
    return;
  }

  yield put(GeocodeActions.fetchRequest({ placename: cleanedQuery }));
}

function* handleGeocodeFetchRequest(action: BasicAction<GeocodeFetchRequestPayload>) {
  try {
    const {
      payload: { placename }
    } = action;

    const { response, data } = yield* call(GeocodeApi.get, placename);
    if (!response.ok) throw new Error('api fail');

    const { searchResult, locationData } = geocodeTransformers.normalizeOpenCageApiResponse(data);

    yield put(GeocodeActions.fetchSuccess({ placename, searchResult, locationData }));
  } catch (e) {
    console.debug('>>>handleGeocodeFetchRequest', e);
    yield put(GeocodeActions.fetchFailure(e.message));
  }
}

function* handleGeocodeFetchSuccess() {
  const geocodeData = yield* select(selectors.models.geocode.getData);

  storage.geocode.set(geocodeData);
}

export const GeocodeSagas = [
  takeLatest(GeocodeActionTypes.QUERY, handleGeocodeQuery),
  takeLatest(GeocodeActionTypes.FETCH_SUCCESS, handleGeocodeFetchSuccess),
  debounce(500, GeocodeActionTypes.FETCH_REQUEST, handleGeocodeFetchRequest)
];
