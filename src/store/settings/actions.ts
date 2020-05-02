import { createAction, ActionsUnion } from 'types/store';
import { TemperatureUnit } from './types';

export enum SettingsActionTypes {
  SETTINGS_CHANGE_UNIT = '[SETTINGS] CHANGE_UNIT'
}

export const SettingsActions = {
  settingsChangeUnit: (payload: TemperatureUnit) =>
    createAction(SettingsActionTypes.SETTINGS_CHANGE_UNIT, payload)
};

export type SettingsActions = ActionsUnion<typeof SettingsActions>;
