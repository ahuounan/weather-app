import { querySelectors } from './query/selectors';
import { settingsSelectors } from './settings/selectors';
import { locationSelectors } from './location/selectors';

export const viewSelectors = {
  query: querySelectors,
  location: locationSelectors,
  settings: settingsSelectors
};
