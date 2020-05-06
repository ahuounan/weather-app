import { DataSection } from 'models/settings';
import { WeatherDaily, WeatherHourly, WeatherCurrent } from 'models/weather';

import { geocodeSelectors } from './data/geocode/selectors';
import { weatherSelectors } from './data/weather/selectors';
import { getKey } from './data/utils';

import { searchSelectors } from './view/search/selectors';
import { settingsSelectors } from './view/settings/selectors';
import { weatherViewSelectors } from './view/weather/selectors';

import { RootState } from './types';

export const getLocationWeather = (state: RootState) => {
  const { lat, lng } = weatherViewSelectors.getLocation(state);
  const key = getKey(lat, lng);
  const getData = weatherSelectors.makeGetDataByKey(key);

  return getData(state);
};

export const getLocationTimezone = (state: RootState) => getLocationWeather(state).timezone;
export const getLocationLat = (state: RootState) => getLocationWeather(state).lat;
export const getLocationLng = (state: RootState) => getLocationWeather(state).lng;
export const getLocationKey = (state: RootState) =>
  getKey(getLocationLat(state), getLocationLng(state));

export const getLocationDailyWeather = (state: RootState) => getLocationWeather(state).daily;
export const getLocationHourlyWeather = (state: RootState) => getLocationWeather(state).hourly;
export const getLocationCurrentWeather = (state: RootState) => getLocationWeather(state).current;

export const getDisplayedLocationDailyWeather = (state: RootState) => {
  const weather = getLocationDailyWeather(state);
  const settings = settingsSelectors.getDailySettings(state);

  return weather.map(data => {
    const filteredData: Partial<WeatherDaily> = {};

    Object.keys(data).forEach(key => {
      const dataPoint = data[key];
      if (settings && settings[key]) {
        (filteredData[key] as typeof dataPoint) = dataPoint;
      }
    });

    return filteredData;
  });
};

export const getDisplayedLocationHourlyWeather = (state: RootState) => {
  const weather = getLocationHourlyWeather(state);
  const settings = settingsSelectors.getHourlySettings(state);

  return weather.map(data => {
    const filteredData: Partial<WeatherHourly> = {};

    Object.keys(data).forEach(key => {
      const dataPoint = data[key];
      if (settings && settings[key]) {
        (filteredData[key] as typeof dataPoint) = dataPoint;
      }
    });

    return filteredData;
  });
};

export const getDisplayedLocationCurrentWeather = (state: RootState) => {
  const data = getLocationCurrentWeather(state);
  if (!data) {
    return undefined;
  }

  const settings = settingsSelectors.getCurrentSettings(state);
  const filteredData: Partial<WeatherCurrent> = {};

  Object.keys(data).forEach(key => {
    const dataPoint = data[key];
    if (settings[key]) {
      (filteredData[key] as typeof dataPoint) = dataPoint;
    }
  });

  return filteredData;
};

export const getDisplayedLocationDataSeries = (state: RootState) => {
  const dataSeries = settingsSelectors.getCurrentDataSeries(state);

  switch (dataSeries) {
    case DataSection.HOURLY: {
      return getDisplayedLocationHourlyWeather(state);
    }
    case DataSection.DAILY: {
      return getDisplayedLocationDailyWeather(state);
    }
    default: {
      return null;
    }
  }
};

export const getLocationLabel = (state: RootState) => {
  const { lat, lng } = weatherViewSelectors.getLocation(state);

  return geocodeSelectors.getLocationData(state)[getKey(lat, lng)]?.label;
};

export const getCurrentSearchResult = (state: RootState) => {
  const query = searchSelectors.getQuery(state);
  const getDenormalizedSearchResults = geocodeSelectors.makeGetDenormalizedSearchResult(query);
  const searchResults = getDenormalizedSearchResults(state);

  return searchResults;
};
