import { RootState } from 'store/types';
import { geocodeSelectors } from './geocode/selectors';
import { weatherSelectors } from './weather/selectors';

const getState = (state: RootState) => state.data;

export const dataSelectors = {
  getState,
  geocode: geocodeSelectors,
  weather: weatherSelectors
};
