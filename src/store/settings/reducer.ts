import { TemperatureUnit, SettingsState } from './types';
import { SettingsActions, SettingsActionTypes } from './actions';

const initialState: SettingsState = {
  temperatureUnit: TemperatureUnit.KELVIN
};

export const settingsReducer = (
  state = initialState,
  action: SettingsActions
) => {
  switch (action.type) {
    case SettingsActionTypes.SETTINGS_CHANGE_UNIT: {
      return {
        ...state,
        temperatureUnit: action.payload
      };
    }
  }
};
