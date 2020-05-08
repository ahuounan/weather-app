import { GeocodeSearchResults, GeocodeLocationData } from 'store/models/geocode/types';
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
  geocode: {
    set: setGeocodeData,
    get: getGeocodeData
  },
  settings: {
    get: getSettings,
    set: setSettings
  }
};
