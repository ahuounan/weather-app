export enum TemperatureUnit {
  KELVIN = 'KEVLIN',
  CELSIUS = 'CELSIUS',
  FAHRENHEIT = 'FAHRENHEIT'
}

export interface SettingsState {
  temperatureUnit: TemperatureUnit;
}
