import { createAction, ActionsUnion } from '../types';
import { PaintingsFetchResponsePayload } from './types';

export enum PaintingsActionTypes {
  PAINTINGS_FETCH_REQUEST = '[PAINTINGS] FETCH_REQUEST',
  PAINTINGS_FETCH_FAILURE = '[PAINTINGS] FETCH_FAILURE',
  PAINTINGS_FETCH_SUCCESS = '[PAINTINGS] FETCH_SUCCESS'
}

export const PaintingsActions = {
  fetchPaintingsRequest: () => createAction(PaintingsActionTypes.PAINTINGS_FETCH_REQUEST),
  fetchPaintingsFailure: () => createAction(PaintingsActionTypes.PAINTINGS_FETCH_FAILURE),
  fetchPaintingsSuccess: (payload: PaintingsFetchResponsePayload) =>
    createAction(PaintingsActionTypes.PAINTINGS_FETCH_SUCCESS, payload)
};

export type PaintingsActions = ActionsUnion<typeof PaintingsActions>;
