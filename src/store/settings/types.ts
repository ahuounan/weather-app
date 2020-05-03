export enum TemperatureUnit {
  KELVIN = 'KELVIN',
  CELSIUS = 'CELSIUS',
  FAHRENHEIT = 'FAHRENHEIT'
}

export enum DataSeriesType {
  HOURS = 'HOURS',
  DAYS = 'DAYS'
}

export enum DataPoint {
  SUNRISE = 'SUNRISE',
  SUNSET = 'SUNSET',
  TEMP = 'TEMP',
  FEELS_LIKE = 'FEELS_LIKE',
  PRESSURE = 'PRESSURE',
  HUMIDITY = 'HUMIDITY',
  DEWPOINT = 'DEWPOINT',
  CLOUDS = 'CLOUDS',
  UVI = 'UVI',
  VISIBILITY = 'VISIBILITY',
  WIND_SPEED = 'WIND_SPEED',
  WIND_GUST = 'WIND_GUST',
  WIND_DEG = 'WIND_DEG',
  ICON = 'ICON',
  DESCRIPTION = 'DESCRIPTION'
}

export interface SettingsState {
  temperatureUnit: TemperatureUnit;
  dataSeries: DataSeriesType;
  dataPoints: {
    [DataPoint.SUNRISE]: boolean;
    [DataPoint.SUNSET]: boolean;
    [DataPoint.TEMP]: boolean;
    [DataPoint.FEELS_LIKE]: boolean;
    [DataPoint.PRESSURE]: boolean;
    [DataPoint.HUMIDITY]: boolean;
    [DataPoint.DEWPOINT]: boolean;
    [DataPoint.CLOUDS]: boolean;
    [DataPoint.UVI]: boolean;
    [DataPoint.VISIBILITY]: boolean;
    [DataPoint.WIND_SPEED]: boolean;
    [DataPoint.WIND_GUST]: boolean;
    [DataPoint.WIND_DEG]: boolean;
    [DataPoint.ICON]: boolean;
    [DataPoint.DESCRIPTION]: boolean;
  };
}
