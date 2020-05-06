import { DataSection } from 'models/settings';
import { WeatherDaily, WeatherHourly, WeatherCurrent } from 'models/weather';

import { geocodeSelectors } from './data/geocode/selectors';
import { weatherSelectors } from './data/weather/selectors';
import { getKey } from './data/utils';

import { searchSelectors } from './view/search/selectors';
import { settingsSelectors } from './view/settings/selectors';
import { weatherViewSelectors } from './view/weather/selectors';

import { RootState } from './types';
import { dataSelectors } from './data/selectors';
import { viewSelectors } from './view/selectors';

const getLocationWeather = (state: RootState) => {
  const { lat, lng } = weatherViewSelectors.getLocation(state);
  const key = getKey(lat, lng);
  const getData = weatherSelectors.makeGetDataByKey(key);

  return getData(state);
};
const getLocationTimezone = (state: RootState) => getLocationWeather(state).timezone;
const getLocationLat = (state: RootState) => getLocationWeather(state).lat;
const getLocationLng = (state: RootState) => getLocationWeather(state).lng;
const getLocationKey = (state: RootState) => getKey(getLocationLat(state), getLocationLng(state));
const getLocationDailyWeather = (state: RootState) => getLocationWeather(state).daily;
const getLocationHourlyWeather = (state: RootState) => getLocationWeather(state).hourly;
const getLocationCurrentWeather = (state: RootState) => getLocationWeather(state).current;

const getDisplayedLocationDailyWeather = (state: RootState) => {
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
const getDisplayedLocationHourlyWeather = (state: RootState) => {
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
const getDisplayedLocationCurrentWeather = (state: RootState) => {
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
const getDisplayedLocationDataSeries = (state: RootState) => {
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

const getLocationLabel = (state: RootState) => {
  const lat = getLocationLat(state);
  const lng = getLocationLng(state);

  return geocodeSelectors.getLocationData(state)[getKey(lat, lng)]?.label;
};

const getCurrentSearchResult = (state: RootState) => {
  const query = searchSelectors.getQuery(state);
  const getDenormalizedSearchResults = geocodeSelectors.makeGetDenormalizedSearchResult(query);
  const searchResults = getDenormalizedSearchResults(state);

  return searchResults;
};

export const selectors = {
  location: {
    getWeather: getLocationWeather,
    getTimezone: getLocationTimezone,
    getLat: getLocationLat,
    getLng: getLocationLng,
    getKey: getLocationKey,
    getLabel: getLocationLabel,
    getDailyWeather: getLocationDailyWeather,
    getHourlyWeather: getLocationHourlyWeather,
    getCurrentWeather: getLocationCurrentWeather
  },
  displayed: {
    getDailyWeather: getDisplayedLocationDailyWeather,
    getHourlyWeather: getDisplayedLocationHourlyWeather,
    getCurrentWeather: getDisplayedLocationCurrentWeather,
    getDataSeries: getDisplayedLocationDataSeries
  },
  getCurrentSearchResult,
  data: dataSelectors,
  view: viewSelectors
};
