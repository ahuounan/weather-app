import { RootState } from 'store/types';

import { DataSection, TemperatureUnit } from './types';

const getState = (state: RootState) => state.view.settings;
const getTemperatureUnit = (state: RootState) => getState(state).temperatureUnit;
const getCurrentDataSeries = (state: RootState) => getState(state).currentDataSeries;
const getCurrentSettings = (state: RootState) => getState(state)[DataSection.CURRENT];
const getHourlySettings = (state: RootState) => getState(state).dataSeries[DataSection.HOURLY];
const getDailySettings = (state: RootState) => getState(state).dataSeries[DataSection.DAILY];

const makeGetDataSeriesSettings = (section: DataSection) => (state: RootState) => {
  switch (section) {
    case DataSection.CURRENT: {
      return getCurrentSettings(state);
    }
    case DataSection.DAILY: {
      return getDailySettings(state);
    }
    case DataSection.HOURLY: {
      return getHourlySettings(state);
    }
    default: {
      return;
    }
  }
};

const getCurrentDataSeriesSettings = (state: RootState) => {
  const currentDataSeries = getCurrentDataSeries(state);
  const getDataSeriesSettings = makeGetDataSeriesSettings(currentDataSeries);

  return getDataSeriesSettings(state);
};

const formatKelvin = (temp: number) => `${temp.toFixed(0)}°K`;
const formatCelsius = (temp: number) => `${(temp - 273.15).toFixed(0)}°C`;
const formatFahrenheit = (temp: number) => `${(((temp - 273.15) * 9) / 5 + 32).toFixed(0)}°F`;

const getFormatTemperature = (state: RootState) => {
  const unit = getTemperatureUnit(state);

  switch (unit) {
    case TemperatureUnit.KELVIN: {
      return formatKelvin;
    }
    case TemperatureUnit.CELSIUS: {
      return formatCelsius;
    }
    case TemperatureUnit.FAHRENHEIT: {
      return formatFahrenheit;
    }
  }
};

export const settingsSelectors = {
  getState,
  getTemperatureUnit,
  getCurrentSettings,
  getHourlySettings,
  getDailySettings,
  makeGetDataSeriesSettings,
  getFormatTemperature,
  getCurrentDataSeries,
  getCurrentDataSeriesSettings
};
