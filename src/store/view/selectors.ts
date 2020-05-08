import { searchSelectors } from './search/selectors';
import { settingsSelectors } from './settings/selectors';
import { weatherViewSelectors } from './weather/selectors';

export const viewSelectors = {
  search: searchSelectors,
  weather: weatherViewSelectors,
  settings: settingsSelectors
};
