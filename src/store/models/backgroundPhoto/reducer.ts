import { BackgroundPhotoState } from './types';
import { BackgroundPhotoActions, BackgroundPhotoActionTypes } from './actions';

const initialState: BackgroundPhotoState = {
  fetching: false,
  error: false,
  data: {}
};

export const backgroundPhotoReducer = (state = initialState, action: BackgroundPhotoActions) => {
  switch (action.type) {
    case BackgroundPhotoActionTypes.FETCH_PHOTOS_REQUEST: {
      return {
        ...state,
        fetching: true
      };
    }
    case BackgroundPhotoActionTypes.FETCH_PHOTOS_SUCCESS: {
      const { locationKey, results } = action.payload;
      return {
        ...state,
        error: false,
        fetching: false,
        data: {
          ...state.data,
          [locationKey]: results
        }
      };
    }
    case BackgroundPhotoActionTypes.FETCH_PHOTOS_FAILURE: {
      return {
        ...state,
        error: true,
        fetching: false
      };
    }
    default: {
      return state;
    }
  }
};
