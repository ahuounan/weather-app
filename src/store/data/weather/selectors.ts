import { RootState } from 'store/types';
import { getKey } from './utils';

const getWeatherDataByLatLng = (state: RootState, lat: number, lng: number) => {
  return state.weather.data[getKey(lat, lng)];
};

const getWeatherCurrentTimestamp = (
  state: RootState,
  lat: number,
  lng: number
) => state.weather.data[getKey(lat, lng)]?.current.timestamp;

export const weatherSelectors = {
  getWeatherDataByLatLng,
  getWeatherCurrentTimestamp
};
