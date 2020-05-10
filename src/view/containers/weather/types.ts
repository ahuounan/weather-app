import { WeatherCurrent, WeatherDaily, WeatherHourly } from 'models/weather';

export type FormattedData<T> = {
  [key in keyof T]: string;
};

export type FormattedWeatherCurrent = Partial<FormattedData<WeatherCurrent>>;
export type FormattedWeatherDaily = Partial<FormattedData<WeatherDaily>>;
export type FormattedWeatherHourly = Partial<FormattedData<WeatherHourly>>;
