import { createAction, ActionsUnion } from 'types/store';

import { ToggleDataPointPayload, TemperatureUnit, DataSeries } from './types';

export enum SettingsActionTypes {
  CHANGE_UNIT = '[SETTINGS] CHANGE_UNIT',
  CHANGE_DATA_SERIES = '[SETTINGS] CHANGE_DATA_SERIES',
  TOGGLE_DATA_POINT = '[SETTINGS] TOGGLE_DATA_POINT'
}

export const SettingsActions = {
  settingsChangeUnit: (payload: TemperatureUnit) =>
    createAction(SettingsActionTypes.CHANGE_UNIT, payload),
  changeDataSeries: (payload: DataSeries) =>
    createAction(SettingsActionTypes.CHANGE_DATA_SERIES, payload),
  toggleDataPoint: (payload: ToggleDataPointPayload) =>
    createAction(SettingsActionTypes.TOGGLE_DATA_POINT, payload)
};

export type SettingsActions = ActionsUnion<typeof SettingsActions>;
