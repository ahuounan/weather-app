import { WeatherCurrent, WeatherHourly, WeatherDaily } from 'models/weather';

export type ToggleDataPointPayload =
  | ToggleCurrentDataPointPayload
  | ToggleHourlyDataPointPayload
  | ToggleDailyDataPointPayload;

export interface ToggleCurrentDataPointPayload {
  section: DataSection.CURRENT;
  dataPoint: keyof CurrentDataPoints;
}

export interface ToggleHourlyDataPointPayload {
  section: DataSection.HOURLY;
  dataPoint: keyof HourlyDataPoints;
}

export interface ToggleDailyDataPointPayload {
  section: DataSection.DAILY;
  dataPoint: keyof DailyDataPoints;
}

export type DataPoints<T> = {
  [key in keyof T]: boolean;
};

export type CurrentDataPoints = DataPoints<WeatherCurrent>;
export type HourlyDataPoints = DataPoints<WeatherHourly>;
export type DailyDataPoints = DataPoints<WeatherDaily>;

export enum TemperatureUnit {
  KELVIN = 'kelvin',
  CELSIUS = 'celsius',
  FAHRENHEIT = 'fahrenheit'
}

export type DataSeries = DataSection.HOURLY | DataSection.DAILY;

export enum DataSection {
  CURRENT = 'current',
  HOURLY = 'hourly',
  DAILY = 'daily'
}

export interface SettingsState {
  temperatureUnit: TemperatureUnit;
  currentDataSeries: DataSeries;
  [DataSection.CURRENT]: CurrentDataPoints;
  dataSeries: {
    [DataSection.HOURLY]: HourlyDataPoints;
    [DataSection.DAILY]: DailyDataPoints;
  };
}
