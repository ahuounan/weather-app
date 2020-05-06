import { SearchActions, SearchActionTypes } from './actions';
import { SearchState } from './types';

const initialState: SearchState = {
  query: ''
};

export const searchReducer = (state = initialState, action: SearchActions) => {
  switch (action.type) {
    case SearchActionTypes.UPDATE_QUERY: {
      return {
        ...state,
        query: action.payload
      };
    }
    default: {
      return state;
    }
  }
};