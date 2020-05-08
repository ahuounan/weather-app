import { RootState } from 'store/types';

const getLocation = (state: RootState) => state.view.location.location;

export const locationSelectors = {
  get: getLocation
};
