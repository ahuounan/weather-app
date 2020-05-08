import { LocationActions, LocationActionTypes } from './actions';
import { LocationState } from './types';

const initialState: LocationState = {
  location: {
    lat: undefined,
    lng: undefined
  }
};

export const locationReducer = (state = initialState, action: LocationActions) => {
  switch (action.type) {
    case LocationActionTypes.SET: {
      const { location } = action.payload;
      return {
        ...state,
        location
      };
    }
    default: {
      return state;
    }
  }
};
