import { geocodeSelectors } from './geocode/selectors';
import { weatherSelectors } from './weather/selectors';
import { backgroundPhotoSelectors } from './backgroundPhoto/selectors';

export const modelSelectors = {
  geocode: geocodeSelectors,
  weather: weatherSelectors,
  backgroundPhoto: backgroundPhotoSelectors
};
