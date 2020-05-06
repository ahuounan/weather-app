import { DataSection } from 'models/settings';

import { RootState } from 'store/types';
import { viewSelectors } from '../selectors';

const getState = (state: RootState) => viewSelectors.getState(state).settings;
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
      return null;
    }
  }
};

const getCurrentDataSeriesSettings = (state: RootState) => {
  const currentDataSeries = getCurrentDataSeries(state);
  const getDataSeriesSettings = makeGetDataSeriesSettings(currentDataSeries);

  return getDataSeriesSettings(state);
};

export const settingsSelectors = {
  getTemperatureUnit,
  getCurrentSettings,
  getHourlySettings,
  getDailySettings,
  makeGetDataSeriesSettings,
  getCurrentDataSeries,
  getCurrentDataSeriesSettings
};
