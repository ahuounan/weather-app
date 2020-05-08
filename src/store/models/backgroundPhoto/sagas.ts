import { call, put, debounce, select } from 'typed-redux-saga';

import { getKey } from 'store/models/utils';
import { selectors } from 'store/selectors';

import { BasicAction } from 'types/store';

import { BackgroundPhotoActions, BackgroundPhotoActionTypes } from './actions';
import { BackgroundPhotoApi } from './api';
import { BackgroundPhotoTransformer } from './transformers';
import { FetchPhotosRequestPayload } from './types';

function* handleFetchBackgroundViewRequest(action: BasicAction<FetchPhotosRequestPayload>) {
  try {
    const { location } = action.payload;

    const getGeocodeDatabyLocation = selectors.models.geocode.makeGetDataByLocation(location);
    const { label } = yield* select(getGeocodeDatabyLocation);

    const { response, data } = yield* call(BackgroundPhotoApi.get, label);
    if (!response.ok) throw new Error('Api fail');

    const transformedData = BackgroundPhotoTransformer.normalizeApiResponse(data);
    yield* put(
      BackgroundPhotoActions.fetchSuccess({
        locationKey: getKey(location),
        results: transformedData
      })
    );
  } catch (e) {
    console.warn('>>>handleFetchBackgroundViewRequest error', e);
    yield* put(BackgroundPhotoActions.fetchFailure(e.message));
  }
}

export const BackgroundPhotoSagas = [
  debounce(500, BackgroundPhotoActionTypes.FETCH_PHOTOS_REQUEST, handleFetchBackgroundViewRequest)
];
