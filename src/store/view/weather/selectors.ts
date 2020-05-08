import { RootState } from 'store/types';

const getLocation = (state: RootState) => state.view.weather.location;

export const weatherViewSelectors = {
  getLocation
};
