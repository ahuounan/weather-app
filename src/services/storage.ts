import { Location } from 'models/location';

import { SettingsState } from 'store/view/settings/types';
import { GeocodeSearchResults, GeocodeLocationData } from 'store/models/geocode/types';

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

const setGeocodeData = (data: {
  searchResults: Record<string, GeocodeSearchResults>;
  locationData: GeocodeLocationData;
}) => {
  set(Key.GEOCODE, data);
};

const getGeocodeData = () => {
  return get(Key.GEOCODE);
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
    get: getGeocodeData
  },
  settings: {
    get: getSettings,
    set: setSettings
  }
};
