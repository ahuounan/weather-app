import { RootState } from 'store/types';

import { searchSelectors } from './search/selectors';
import { settingsSelectors } from './settings/selectors';
import { weatherViewSelectors } from './weather/selectors';

const getState = (state: RootState) => state.view;

export const viewSelectors = {
  getState,
  search: searchSelectors,
  weather: weatherViewSelectors,
  settings: settingsSelectors
};
