import { SettingsActionTypes, SettingsActions } from './actions';
import { SettingsState, TemperatureUnit, DataSection } from './types';
import { storage } from 'services';

const initialState: SettingsState = storage.settings.get() || {
  temperatureUnit: TemperatureUnit.KELVIN,
  currentDataSeries: DataSection.HOURLY,
  current: {
    temp: true,
    feelsLike: false,
    time: true,
    sunrise: false,
    sunset: false,
    pressure: false,
    humidity: false,
    dewPoint: false,
    clouds: false,
    uvi: false,
    visibility: false,
    windSpeed: false,
    windGust: false,
    windDeg: false,
    rain: false,
    snow: false,
    icon: false,
    description: false
  },
  dataSeries: {
    hourly: {
      temp: true,
      feelsLike: false,
      time: true,
      pressure: false,
      humidity: false,
      dewPoint: false,
      clouds: false,
      uvi: false,
      visibility: false,
      windSpeed: false,
      windGust: false,
      windDeg: false,
      rain: false,
      snow: false,
      icon: false,
      description: false
    },
    daily: {
      tempMorn: false,
      tempDay: false,
      tempEve: false,
      tempNight: false,
      tempMin: true,
      tempMax: true,
      feelsLikeMorn: false,
      feelsLikeDay: false,
      feelsLikeEve: false,
      feelsLikeNight: false,
      time: true,
      sunrise: false,
      sunset: false,
      pressure: false,
      humidity: false,
      dewPoint: false,
      clouds: false,
      uvi: false,
      visibility: false,
      windSpeed: false,
      windGust: false,
      windDeg: false,
      rain: false,
      snow: false,
      icon: false,
      description: false
    }
  }
};

export const settingsReducer = (state = initialState, action: SettingsActions) => {
  switch (action.type) {
    case SettingsActionTypes.CHANGE_UNIT: {
      return {
        ...state,
        temperatureUnit: action.payload
      };
    }
    case SettingsActionTypes.CHANGE_DATA_SERIES: {
      return {
        ...state,
        currentDataSeries: action.payload
      };
    }
    case SettingsActionTypes.TOGGLE_DATA_POINT: {
      switch (action.payload.section) {
        case DataSection.CURRENT: {
          return {
            ...state,
            current: {
              ...state.current,
              [action.payload.dataPoint]: !state.current[action.payload.dataPoint]
            }
          };
        }
        case DataSection.HOURLY: {
          return {
            ...state,
            dataSeries: {
              ...state.dataSeries,
              [DataSection.HOURLY]: {
                ...state.dataSeries[DataSection.HOURLY],
                [action.payload.dataPoint]: !state.dataSeries[DataSection.HOURLY][
                  action.payload.dataPoint
                ]
              }
            }
          };
        }
        // Has to be duplicated for ts discriminated union to work
        case DataSection.DAILY: {
          return {
            ...state,
            dataSeries: {
              ...state.dataSeries,
              [DataSection.DAILY]: {
                ...state.dataSeries[DataSection.DAILY],
                [action.payload.dataPoint]: !state.dataSeries[DataSection.DAILY][
                  action.payload.dataPoint
                ]
              }
            }
          };
        }
      }
    }
    default: {
      return state;
    }
  }
};
