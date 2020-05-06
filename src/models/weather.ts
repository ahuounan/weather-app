export interface Weather {
  lat: number;
  lng: number;
  timezone: string;
  current: WeatherCurrent;
  hourly: WeatherHourly[];
  daily: WeatherDaily[];
}

export interface WeatherCurrent extends HourlyTemperatures, SunRiseSetTimes, WeatherCommon {}

export interface WeatherHourly extends HourlyTemperatures, WeatherCommon {}

export interface WeatherDaily extends DailyTemperatures, SunRiseSetTimes, WeatherCommon {}

export interface WeatherCommon {
  time: number;
  pressure: number;
  humidity: number;
  dewPoint: number;
  clouds: number;
  uvi: number;
  visibility: number;
  windSpeed: number;
  windGust: number;
  windDeg: number;
  rain: number;
  snow: number;
  icon: string;
  description: string;
}

export interface SunRiseSetTimes {
  sunrise: number;
  sunset: number;
}

export interface HourlyTemperatures {
  temp: number;
  feelsLike: number;
}

export interface DailyTemperatures {
  tempMorn: number;
  tempDay: number;
  tempEve: number;
  tempNight: number;
  tempMin: number;
  tempMax: number;
  feelsLikeMorn: number;
  feelsLikeDay: number;
  feelsLikeEve: number;
  feelsLikeNight: number;
}
