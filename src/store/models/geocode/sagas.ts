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

  const getQueryData = selectors.models.geocode.makeGetDataByQuery(cleanedQuery);
  const existingData = yield* select(getQueryData);

  if (existingData) {
    yield put(GeocodeActions.returnCached());
    return;
  }

  yield put(GeocodeActions.fetchRequest({ placename: cleanedQuery }));
}

function* handleGeocodeFetchRequest(action: BasicAction<GeocodeFetchRequestPayload>) {
  try {
    const {
      payload: { placename }
    } = action;

    if (placename.length < 2) {
      throw new Error('placename too short');
    }

    const { response, data } = yield* call(GeocodeApi.get, placename);
    if (!response.ok) throw new Error('api fail');

    const { searchResults, locationData } = geocodeTransformers.normalizeOpenCageApiResponse(data);
    Object.keys(locationData).forEach(key => {
      const value = locationData[key];
      const { lat, lng } = value;

      storage.geocode.set({ lat, lng }, value);
    });

    yield put(GeocodeActions.fetchSuccess({ placename, searchResults, locationData }));
  } catch (e) {
    console.debug('>>>handleGeocodeFetchRequest', e);
    yield put(GeocodeActions.fetchFailure(e.message));
  }
}

export const GeocodeSagas = [
  takeLatest(GeocodeActionTypes.QUERY, handleGeocodeQuery),
  debounce(500, GeocodeActionTypes.FETCH_REQUEST, handleGeocodeFetchRequest)
];