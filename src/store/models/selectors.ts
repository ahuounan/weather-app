import { RootState } from 'store/types';

import { geocodeSelectors } from './geocode/selectors';
import { weatherSelectors } from './weather/selectors';

const getState = (state: RootState) => state.models;

export const modelSelectors = {
  getState,
  geocode: geocodeSelectors,
  weather: weatherSelectors
};
