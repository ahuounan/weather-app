import { Location } from 'models/location';
import { Geocode } from 'models/geocode';

import { getKey } from 'store/models/utils';
import { SettingsState } from 'store/view/settings/types';

enum Key {
  LOCATION_LAT = 'LOCATION_LAT',
  LOCATION_LNG = 'LOCATION_LNG',
  GEOCODE = 'GEOCODE',
  SETTINGS = 'SETTINGS'
}

const set = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const get = (key: string) => {
  const rawValue = window.localStorage.getItem(key);
  if (!rawValue) {
    return;
  }

  return JSON.parse(rawValue);
};

const setLocation = ({ lat, lng }: Location) => {
  set(Key.LOCATION_LAT, lat);
  set(Key.LOCATION_LNG, lng);
};

const getLocation = (): Location | undefined => {
  const lat = get(Key.LOCATION_LAT);
  const lng = get(Key.LOCATION_LNG);
  if (!lat || !lng) {
    return;
  }

  return { lat, lng: lng };
};

const setGeocodeData = (location: Location, geocodeData: Geocode) => {
  const key = `${Key.GEOCODE}_${getKey(location)}`;
  set(key, geocodeData);
};

const getGeocodeDataByLocation = (location: Location) => {
  const key = `${Key.GEOCODE}_${getKey(location)}`;

  return get(key);
};

const getGeocodeData = () => {
  const data: Record<string, Geocode> = {};
  Object.keys(window.localStorage).forEach(key => {
    const [prefix, locationKey] = String(key).split('_');

    if (prefix === Key.GEOCODE) {
      data[locationKey] = get(String(key));
    }
  });
  return data;
};

const setSettings = (settings: SettingsState) => {
  set(Key.SETTINGS, settings);
};

const getSettings = () => {
  return get(Key.SETTINGS);
};

export const storage = {
  location: {
    set: setLocation,
    get: getLocation
  },
  geocode: {
    set: setGeocodeData,
    get: getGeocodeData,
    getByLocation: getGeocodeDataByLocation
  },
  settings: {
    get: getSettings,
    set: setSettings
  }
};
