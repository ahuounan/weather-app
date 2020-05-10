import { call, put, select, debounce } from 'typed-redux-saga';

import { storage } from 'services';

import { selectors } from 'store/selectors';

import { BasicAction } from 'types/store';

import { GeocodeActionTypes, GeocodeActions } from './actions';
import { GeocodeApi } from './api';
import { geocodeSelectors } from './selectors';
import { geocodeTransformers } from './transformers';
import { GeocodeFetchRequestPayload } from './types';

function* geocodeFetchRequest(payload: GeocodeFetchRequestPayload) {
  try {
    const { placename } = payload;

    yield* put(GeocodeActions.fetchRequest({ placename }));
    const { response, data } = yield* call(GeocodeApi.get, placename);
    if (!response.ok) throw new Error('api fail');

    const { searchResult, locationData } = geocodeTransformers.normalizeOpenCageApiResponse(data);

    yield* put(GeocodeActions.fetchSuccess({ placename, searchResult, locationData }));

    const geocodeData = yield* select(selectors.models.geocode.getData);
    storage.geocode.set(geocodeData);
  } catch (e) {
    console.debug('>>>handleGeocodeFetchRequest', e);
    yield* put(GeocodeActions.fetchFailure(e.message));
  }
}

function* handleGeocodeQuery(action: BasicAction<GeocodeFetchRequestPayload>) {
  const { placename } = action.payload;

  const getQueryData = geocodeSelectors.makeGetResultsByQuery(placename);
  const existingData = yield* select(getQueryData);

  if (existingData) {
    yield* put(GeocodeActions.returnCached());
    return;
  }

  if (placename.length < 2) {
    console.debug('>>>handleGeocodeQuery->Placename too short');
    return;
  }

  yield* call(geocodeFetchRequest, { placename });
}

export const GeocodeSagas = [debounce(500, GeocodeActionTypes.QUERY, handleGeocodeQuery)];
