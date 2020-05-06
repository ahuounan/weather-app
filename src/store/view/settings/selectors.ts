import { DataSeries, DataSection } from 'models/settings';
import { RootState } from 'store/types';

const getTemperatureUnit = (state: RootState) => state.settings.temperatureUnit;

const getCurrentDataSeries = (state: RootState) => state.settings.currentDataSeries;
const getCurrentSettings = (state: RootState) => state.settings[DataSection.CURRENT];
const getHourlySettings = (state: RootState) => state.settings.dataSeries[DataSection.HOURLY];
const getDailySettings = (state: RootState) => state.settings.dataSeries[DataSection.DAILY];

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

  switch (currentDataSeries) {
    case DataSeries.DAILY: {
      return state.settings.dataSeries.daily;
    }
    case DataSeries.HOURLY: {
      return state.settings.dataSeries.hourly;
    }
    default: {
      return null;
    }
  }
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
