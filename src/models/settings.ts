import { WeatherCurrent, WeatherHourly, WeatherDaily } from './weather';

export interface Settings {
  current: SettingsCurrent;
  hourly: SettingsHourly;
  daily: SettingsDaily;
  temperatureUnit: TemperatureUnit;
  dataSeries: DataSeries;
}

export type SettingsCurrent = Record<keyof WeatherCurrent, boolean>;
export type SettingsHourly = Record<keyof WeatherHourly, boolean>;
export type SettingsDaily = Record<keyof WeatherDaily, boolean>;

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
