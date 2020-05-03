import { RootState } from 'store/types';

const getTemperatureUnit = (state: RootState) => state.settings.temperatureUnit;

const getSettings = (state: RootState) => state.settings;

export const settingsSelectors = {
  getTemperatureUnit,
  getSettings
};
