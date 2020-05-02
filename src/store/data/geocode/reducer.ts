import { GeocodeActionTypes, GeocodeActions } from './actions';
import { geocodeTransformers } from './transformers';
import { GeocodeState } from './types';

const initialState: GeocodeState = {
  fetching: false,
  error: false,
  searchResults: {},
  locationData: {}
};

export const geocodeReducer = (
  state = initialState,
  action: GeocodeActions
) => {
  switch (action.type) {
    case GeocodeActionTypes.GEOCODE_FETCH_REQUEST: {
      return {
        ...state,
        fetching: true
      };
    }
    case GeocodeActionTypes.GEOCODE_FETCH_FAILURE: {
      return {
        ...state,
        fetching: false,
        error: true
      };
    }
    case GeocodeActionTypes.GEOCODE_RETURN_CACHED: {
      return {
        ...state,
        fetching: false,
        error: false
      };
    }
    case GeocodeActionTypes.GEOCODE_FETCH_SUCCESS: {
      const rawData = action.payload;
      const {
        placename,
        searchResults,
        locationData
      } = geocodeTransformers.normalizeResponse(rawData);

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
    default: {
      return state;
    }
  }
};
