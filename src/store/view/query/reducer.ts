import { QueryActions, QueryActionTypes } from './actions';
import { QueryState } from './types';

const initialState: QueryState = {
  query: ''
};

export const queryReducer = (state = initialState, action: QueryActions) => {
  switch (action.type) {
    case QueryActionTypes.UPDATE: {
      return {
        ...state,
        query: action.payload.query
      };
    }
    default: {
      return state;
    }
  }
};
