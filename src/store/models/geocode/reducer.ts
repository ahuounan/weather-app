import { storage } from 'services';

import { GeocodeActionTypes, GeocodeActions } from './actions';
import { GeocodeState } from './types';

const initialState: GeocodeState = {
  fetching: false,
  error: false,
  searchResults: {},
  locationData: storage.geocode.get()
};

export const geocodeReducer = (state = initialState, action: GeocodeActions) => {
  switch (action.type) {
    case GeocodeActionTypes.FETCH_REQUEST: {
      return {
        ...state,
        fetching: true
      };
    }
    case GeocodeActionTypes.FETCH_FAILURE: {
      return {
        ...state,
        fetching: false,
        error: true
      };
    }
    case GeocodeActionTypes.FETCH_SUCCESS: {
      const { placename, searchResults, locationData } = action.payload;

      return {
        ...state,
        fetching: false,
        error: false,
        searchResults: {
          ...state.searchResults,
          [placename]: searchResults
        },
        locationData: {
          ...state.locationData,
          ...locationData
        }
      };
    }
    case GeocodeActionTypes.RETURN_CACHED: {
      return {
        ...state,
        fetching: false,
        error: false
      };
    }
    default: {
      return state;
    }
  }
};
