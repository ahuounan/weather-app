export interface WeatherState {
  fetching: boolean;
  polling: boolean;
  error: boolean;
  data: {
    [key: string]: WeatherData;
  };
}

export interface WeatherFetchResponsePayload
  extends OpenWeatherOneCallResponse {}

export interface WeatherFetchRequestPayload {
  lng: number;
  lat: number;
}

export interface WeatherData {
  lat: number;
  lon: number;
  timezone: string;
  current: WeatherCurrentData;
  hourly: WeatherHourlyData[];
  daily: WeatherDailyData[];
}

export interface WeatherDailyData extends WeatherDataBase {
  sunrise: number;
  sunset: number;
  temp: TempDataDaily;
  feelsLike: FeelsLikeDataDaily;
}

export interface WeatherCurrentData extends WeatherDataBase {
  sunrise: number;
  sunset: number;
  temp: number;
  feelsLike: number;
}

export interface WeatherHourlyData extends WeatherDataBase {
  temp: number;
  feelsLike: number;
}

export interface WeatherDataBase {
  timestamp: number;
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
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
}

export interface TempDataDaily {
  morn: number;
  day: number;
  eve: number;
  night: number;
  min: number;
  max: number;
}

export interface FeelsLikeDataDaily {
  morn: number;
  day: number;
  eve: number;
  night: number;
}

export interface OpenWeatherOneCallResponse {
  lat: number;
  lon: number;
  timezone: string;
  current: OpenWeatherCurrentData;
  hourly: OpenWeatherHourlyData[];
  daily: OpenWeatherDailyData[];
}

export interface OpenWeatherCurrentData extends OpenWeatherData {
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
}

export interface OpenWeatherHourlyData extends OpenWeatherData {
  temp: number;
  feels_like: number;
}

export interface OpenWeatherDailyData extends OpenWeatherData {
  sunrise: number;
  sunset: number;
  temp: TempDataDaily;
  feels_like: FeelsLikeDataDaily;
}

export interface OpenWeatherData {
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
  rain: number;
  snow: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
}
