export interface WeatherFetchResponsePayload extends OpenWeatherOneCallResponse {}

export interface WeatherFetchRequestPayload {
  lon: number;
  lat: number;
}

export interface OpenWeatherOneCallResponse {
  lat: string;
  lon: string;
  timezone: string;
  current: OpenWeatherCurrentData;
  hourly: OpenWeatherHourlyData;
  daily: OpenWeatherDailyData;
}

export interface OpenWeatherCurrentData extends OpenWeatherData {
  sunrise: string;
  sunset: string;
  temp: string;
  feels_like: string;
}

export interface OpenWeatherHourlyData extends OpenWeatherData {
  temp: string;
  feels_like: string;
}

export interface OpenWeatherDailyData extends OpenWeatherData {
  sunrise: string;
  sunset: string;
  temp: {
    morn: string;
    day: string;
    eve: string;
    night: string;
    min: string;
    max: string;
  };
  feels_like: {
    morn: string;
    day: string;
    eve: string;
    night: string;
  };
}

export interface OpenWeatherData {
  dt: string;
  pressure: string;
  humidity: string;
  dew_point: string;
  clouds: string;
  uvi: string;
  visibility: string;
  wind_speed: string;
  wind_gust: string;
  wind_deg: string;
  rain: string;
  snow: string;
  weather: {
    id: string;
    main: string;
    description: string;
    icon: string;
  };
}
