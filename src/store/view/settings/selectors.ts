import { RootState } from 'store/types';

import { DataSection } from './types';

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

export const settingsSelectors = {
  getState,
  getTemperatureUnit,
  getCurrentSettings,
  getHourlySettings,
  getDailySettings,
  makeGetDataSeriesSettings,
  getCurrentDataSeries,
  getCurrentDataSeriesSettings
};
