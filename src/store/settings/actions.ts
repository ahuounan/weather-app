import { createAction, ActionsUnion } from 'types/store';
import { TemperatureUnit, DataSeriesType, DataPoint } from './types';

export enum SettingsActionTypes {
  SETTINGS_CHANGE_UNIT = '[SETTINGS] CHANGE_UNIT',
  CHANGE_DATA_SERIES = '[SETTINGS] CHANGE_DATA_SERIES',
  TOGGLE_DATA_POINT = '[SETTINGS] TOGGLE_DATA_POINT'
}

export const SettingsActions = {
  settingsChangeUnit: (payload: TemperatureUnit) =>
    createAction(SettingsActionTypes.SETTINGS_CHANGE_UNIT, payload),
  changeDataSeries: (payload: DataSeriesType) =>
    createAction(SettingsActionTypes.CHANGE_DATA_SERIES, payload),
  toggleDataPoint: (payload: DataPoint) =>
    createAction(SettingsActionTypes.TOGGLE_DATA_POINT, payload)
};

export type SettingsActions = ActionsUnion<typeof SettingsActions>;
