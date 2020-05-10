export interface OpenWeatherOneCallResponse {
  lat: number;
  lon: number;
  timezone: string;
  current: OpenWeatherCurrent;
  hourly: OpenWeatherHourly[];
  daily: OpenWeatherDaily[];
}

export interface OpenWeatherCurrent
  extends OpenWeatherSunRiseSetTimes,
    OpenWeatherHourlyTemperatures,
    OpenWeatherCommon {}

export interface OpenWeatherHourly extends OpenWeatherHourlyTemperatures, OpenWeatherCommon {}

export interface OpenWeatherDaily
  extends OpenWeatherDailyTemperatures,
    OpenWeatherSunRiseSetTimes,
    OpenWeatherCommon {}

export interface OpenWeatherHourlyTemperatures {
  temp: number;
  feels_like: number;
}

export interface OpenWeatherDailyTemperatures {
  temp: OpenWeatherTempDaily;
  feels_like: OpenWeatherFeelsLikeDaily;
}

export interface OpenWeatherTempDaily {
  morn: number;
  day: number;
  eve: number;
  night: number;
  min: number;
  max: number;
}

export interface OpenWeatherFeelsLikeDaily {
  morn: number;
  day: number;
  eve: number;
  night: number;
}

export interface OpenWeatherSunRiseSetTimes {
  sunrise: number;
  sunset: number;
}

export interface OpenWeatherCommon {
  dt: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  clouds: number;
  uvi: number;
  visibility: number;
  wind_speed: number;
  wind_gust: number;
  wind_deg: number;
  rain: {
    '1h': number;
  };
  snow: {
    '1h': number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
}
