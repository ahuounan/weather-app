import { PaintingsActions, PaintingsActionTypes } from './actions';
import { PaintingsTransformers } from './transformers';
import { PaintingsState } from './types';

const initialState: PaintingsState = {
  paintings: {},
  paintingsList: [],
  isFetching: false,
  error: false
};

export const paintingsReducer = (state = initialState, action: PaintingsActions) => {
  switch (action.type) {
    case PaintingsActionTypes.PAINTINGS_FETCH_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }
    case PaintingsActionTypes.PAINTINGS_FETCH_FAILURE: {
      return {
        ...state,
        error: true
      };
    }
    case PaintingsActionTypes.PAINTINGS_FETCH_SUCCESS: {
      const { paintingsDict, paintingsList } = PaintingsTransformers.paintings(action.payload);
      return {
        ...state,
        paintingsList,
        paintings: {
          ...state.paintings,
          ...paintingsDict
        }
      };
    }
    default: {
      return state;
    }
  }
};
