import { createAction, ActionsUnion } from 'types/store';
import { UpdateQueryPayload } from './types';

export enum QueryActionTypes {
  UPDATE = '[QUERY] UPDATE'
}

export const QueryActions = {
  update: (payload: UpdateQueryPayload) => createAction(QueryActionTypes.UPDATE, payload)
};

export type QueryActions = ActionsUnion<typeof QueryActions>;
