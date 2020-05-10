import { getKey, isTemperatureStat, isTimeState } from 'store/models/utils';
import { selectors } from 'store/selectors';
import { DataSection } from 'store/view/settings/types';
import { RootState } from 'store/types';

import { formatTime } from 'utils';

import { FormattedWeatherHourly, FormattedWeatherCurrent, FormattedWeatherDaily } from './types';

export const getLocationWeather = (state: RootState) => {
  const location = selectors.view.location.get(state);

  const getData = selectors.models.weather.makeGetDataByLocation(location);

  return getData(state);
};

export const getLocationTimezone = (state: RootState) => getLocationWeather(state)?.timezone;
export const getLocationLat = (state: RootState) => getLocationWeather(state)?.lat;
export const getLocationLng = (state: RootState) => getLocationWeather(state)?.lng;

export const getLocationDailyWeather = (state: RootState) => getLocationWeather(state)?.daily;
export const getLocationHourlyWeather = (state: RootState) => getLocationWeather(state)?.hourly;
export const getLocationCurrentWeather = (state: RootState) => getLocationWeather(state)?.current;

export const getDisplayedLocationDailyWeather = (state: RootState) => {
  const weather = getLocationDailyWeather(state);
  const timezone = getLocationTimezone(state);
  const settings = selectors.view.settings.getDailySettings(state);
  const formatTemp = selectors.view.settings.getFormatTemperature(state);

  return weather?.map(data => {
    const filteredData: FormattedWeatherDaily = {};

    Object.keys(data).forEach(key => {
      const dataPoint = data[key];
      if (settings && settings[key]) {
        if (isTemperatureStat(key)) {
          filteredData[key] = formatTemp(dataPoint as number);
          return;
        }

        if (isTimeState(key)) {
          filteredData[key] = formatTime(new Date(dataPoint as number), timezone);
          return;
        }

        (filteredData[key] as typeof dataPoint) = dataPoint ?? '-';
      }
    });

    return filteredData;
  });
};

export const getDisplayedLocationHourlyWeather = (state: RootState) => {
  const weather = getLocationHourlyWeather(state);
  const settings = selectors.view.settings.getHourlySettings(state);
  const formatTemp = selectors.view.settings.getFormatTemperature(state);
  const timezone = getLocationTimezone(state);

  return weather?.map(data => {
    const filteredData: FormattedWeatherHourly = {};

    Object.keys(data).forEach(key => {
      const dataPoint = data[key];

      if (settings && settings[key]) {
        if (isTemperatureStat(key)) {
          filteredData[key] = formatTemp(dataPoint as number);
          return;
        }

        if (isTimeState(key)) {
          filteredData[key] = formatTime(new Date(dataPoint as number), timezone);
          return;
        }

        (filteredData[key] as typeof dataPoint) = dataPoint ?? '-';
      }
    });

    return filteredData;
  });
};

export const getDisplayedLocationCurrentWeather = (state: RootState) => {
  const data = getLocationCurrentWeather(state);
  if (!data) {
    return;
  }

  const settings = selectors.view.settings.getCurrentSettings(state);
  const formatTemp = selectors.view.settings.getFormatTemperature(state);
  const timezone = getLocationTimezone(state);
  const filteredData: FormattedWeatherCurrent = {};

  Object.keys(data).forEach(key => {
    const dataPoint = data[key];
    if (settings && settings[key]) {
      if (isTemperatureStat(key)) {
        filteredData[key] = formatTemp(dataPoint as number);
        return;
      }

      if (isTimeState(key)) {
        filteredData[key] = formatTime(new Date(dataPoint as number), timezone);
        return;
      }

      (filteredData[key] as typeof dataPoint) = dataPoint ?? '-';
    }
  });

  return filteredData;
};

export const getDisplayedLocationDataSeries = (state: RootState) => {
  const dataSeries = selectors.view.settings.getCurrentDataSeries(state);

  switch (dataSeries) {
    case DataSection.HOURLY: {
      return getDisplayedLocationHourlyWeather(state);
    }
    case DataSection.DAILY: {
      return getDisplayedLocationDailyWeather(state);
    }
    default: {
      return;
    }
  }
};

export const getLocationLabel = (state: RootState) => {
  const location = selectors.view.location.get(state);

  return selectors.models.geocode.getLocationData(state)[getKey(location)]?.label;
};

export const getLocationBackgroundPhotoUrls = (state: RootState) => {
  const location = selectors.view.location.get(state);

  return selectors.models.backgroundPhoto.makeGetDataByLocation(location)(state);
};
