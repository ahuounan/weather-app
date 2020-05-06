import { storage } from 'services';

import { GeocodeActionTypes, GeocodeActions } from './actions';
import { GeocodeState } from './types';

const { searchResults, locationData } = storage.geocode.get() ?? {};

const initialState: GeocodeState = {
  fetching: false,
  error: false,
  data: {
    searchResults: searchResults ?? {},
    locationData: locationData ?? {}
  }
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
      const { placename, searchResult, locationData } = action.payload;

      return {
        ...state,
        fetching: false,
        error: false,
        data: {
          ...state.data,
          searchResults: {
            ...state.data.searchResults,
            [placename]: searchResult
          },
          locationData: {
            ...state.data.locationData,
            ...locationData
          }
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
