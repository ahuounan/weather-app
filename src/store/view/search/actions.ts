import { createAction, ActionsUnion } from 'types/store';

export enum SearchActionTypes {
  UPDATE_QUERY = '[SEARCH] UPDATE_QUERY'
}

export const SearchActions = {
  updateQuery: (payload: string) => createAction(SearchActionTypes.UPDATE_QUERY, payload)
};

export type SearchActions = ActionsUnion<typeof SearchActions>;
