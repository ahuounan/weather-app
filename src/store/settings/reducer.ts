import { TemperatureUnit, SettingsState, DataSeriesType, DataPoint } from './types';
import { SettingsActions, SettingsActionTypes } from './actions';

const initialState: SettingsState = {
  temperatureUnit: TemperatureUnit.KELVIN,
  dataSeries: DataSeriesType.HOURS,
  dataPoints: {
    [DataPoint.SUNRISE]: false,
    [DataPoint.SUNSET]: false,
    [DataPoint.TEMP]: true,
    [DataPoint.FEELS_LIKE]: false,
    [DataPoint.PRESSURE]: false,
    [DataPoint.HUMIDITY]: false,
    [DataPoint.DEWPOINT]: false,
    [DataPoint.CLOUDS]: false,
    [DataPoint.UVI]: false,
    [DataPoint.VISIBILITY]: false,
    [DataPoint.WIND_SPEED]: false,
    [DataPoint.WIND_GUST]: false,
    [DataPoint.WIND_DEG]: false,
    [DataPoint.ICON]: true,
    [DataPoint.DESCRIPTION]: false
  }
};

export const settingsReducer = (state = initialState, action: SettingsActions) => {
  switch (action.type) {
    case SettingsActionTypes.SETTINGS_CHANGE_UNIT: {
      return {
        ...state,
        temperatureUnit: action.payload
      };
    }
    case SettingsActionTypes.CHANGE_DATA_SERIES: {
      return {
        ...state,
        dataSeries: action.payload
      };
    }
    case SettingsActionTypes.TOGGLE_DATA_POINT: {
      return {
        ...state,
        dataPoints: {
          ...state.dataPoints,
          [action.payload]: !state.dataPoints[action.payload]
        }
      };
    }
    default: {
      return state;
    }
  }
};
