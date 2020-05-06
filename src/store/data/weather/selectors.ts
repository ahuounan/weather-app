import { getKey } from 'models/utils';

import { settingsSelectors } from 'store/view/settings/selectors';
import { RootState } from 'store/types';
import { weatherViewSelectors } from 'store/view/weather/selectors';
import { WeatherDaily, WeatherHourly, WeatherCurrent } from 'models/weather';

const getFetching = (state: RootState) => state.data.weather.fetching;
const getError = (state: RootState) => state.data.weather.error;
const getPolling = (state: RootState) => state.data.weather.polling;
const getData = (state: RootState) => state.data.weather.data;
const getTimezone = (state: RootState) => state.data.weather.data?.current?.timezone;

const getCurrentLocationWeather = (state: RootState) => {
  const data = getData(state);
  const { lat, lng } = weatherViewSelectors.getLocation(state);

  return data[getKey(lat, lng)];
};

const getDailyWeatherData = (state: RootState) => {
  const weather = getCurrentLocationWeather(state);
  const settings = settingsSelectors.getDailySettings(state);

  return weather?.daily.map(data => {
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

const getHourlyWeatherData = (state: RootState) => {
  const weather = getCurrentLocationWeather(state);
  const settings = settingsSelectors.getHourlySettings(state);

  return weather?.hourly.map(data => {
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

const getCurrentWeatherData = (state: RootState) => {
  const weather = getCurrentLocationWeather(state);
  if (!weather?.current) {
    return undefined;
  }

  const settings = settingsSelectors.getCurrentSettings(state);
  const filteredData: Partial<WeatherCurrent> = {};

  Object.keys(weather.current).forEach(key => {
    const dataPoint = weather.current[key];
    if (settings[key]) {
      (filteredData[key] as typeof dataPoint) = dataPoint;
    }
  });

  return filteredData;
};

export const weatherSelectors = {
  getFetching,
  getError,
  getPolling,
  getData,
  getTimezone,
  getCurrentLocationWeather,
  getCurrentWeatherData,
  getDailyWeatherData,
  getHourlyWeatherData
};
