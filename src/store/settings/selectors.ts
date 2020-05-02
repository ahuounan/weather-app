import { RootState } from 'store/types';

export const getTemperatureUnit = (state: RootState) =>
  state.settings.temperatureUnit;
