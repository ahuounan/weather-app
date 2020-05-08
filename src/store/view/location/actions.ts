import { createAction, ActionsUnion } from 'types/store';

import { SetLocationPayload } from './types';

export enum LocationActionTypes {
  SET = '[LOCATION] SET'
}

export const LocationActions = {
  set: (payload: SetLocationPayload) => createAction(LocationActionTypes.SET, payload)
};

export type LocationActions = ActionsUnion<typeof LocationActions>;
