import { DataSeries, DataSection } from 'models/settings';
import { RootState } from 'store/types';

const getTemperatureUnit = (state: RootState) => state.view.settings.temperatureUnit;

const getCurrentDataSeries = (state: RootState) => state.view.settings.currentDataSeries;
const getCurrentSettings = (state: RootState) => state.view.settings[DataSection.CURRENT];
const getHourlySettings = (state: RootState) => state.view.settings.dataSeries[DataSection.HOURLY];
const getDailySettings = (state: RootState) => state.view.settings.dataSeries[DataSection.DAILY];

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
      return state.view.settings.dataSeries.daily;
    }
    case DataSeries.HOURLY: {
      return state.view.settings.dataSeries.hourly;
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
