import { createAction, ActionsUnion } from 'types/store';
import { FetchPhotosSuccessPayload, FetchPhotosRequestPayload } from './types';

export enum BackgroundPhotoActionTypes {
  FETCH_PHOTOS_REQUEST = '[BACKGROUND_PHOTO] FETCH_PHOTOS_REQUEST',
  FETCH_PHOTOS_SUCCESS = '[BACKGROUND_PHOTO] FETCH_PHOTOS_SUCCESS',
  FETCH_PHOTOS_FAILURE = '[BACKGROUND_PHOTO] FETCH_PHOTOS_FAILURE'
}

export const BackgroundPhotoActions = {
  fetchRequest: (payload: FetchPhotosRequestPayload) =>
    createAction(BackgroundPhotoActionTypes.FETCH_PHOTOS_REQUEST, payload),
  fetchSuccess: (payload: FetchPhotosSuccessPayload) =>
    createAction(BackgroundPhotoActionTypes.FETCH_PHOTOS_SUCCESS, payload),
  fetchFailure: (payload: string) =>
    createAction(BackgroundPhotoActionTypes.FETCH_PHOTOS_FAILURE, payload)
};

export type BackgroundPhotoActions = ActionsUnion<typeof BackgroundPhotoActions>;
