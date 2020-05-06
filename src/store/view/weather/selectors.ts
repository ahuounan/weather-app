import { RootState } from 'store/types';

const getLat = (state: RootState) => state.view.weather.lat;
const getLng = (state: RootState) => state.view.weather.lng;

const getLocation = (state: RootState) => {
  const lat = getLat(state);
  const lng = getLng(state);

  return { lat, lng };
};

export const weatherViewSelectors = {
  getLocation
};
