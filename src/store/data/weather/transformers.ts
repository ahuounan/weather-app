import {
  WeatherFetchResponsePayload,
  WeatherCurrentData,
  WeatherDailyData,
  WeatherData,
  WeatherHourlyData,
  OpenWeatherCurrentData,
  OpenWeatherDailyData,
  OpenWeatherHourlyData,
  OpenWeatherData,
  WeatherDataBase
} from './types';

const openWeatherDataToData = (data: OpenWeatherData): WeatherDataBase => {
  return {
    timestamp: data.dt,
    pressure: data.pressure,
    humidity: data.humidity,
    dewPoint: data.dew_point,
    clouds: data.clouds,
    uvi: data.uvi,
    visibility: data.visibility,
    windSpeed: data.wind_speed,
    windGust: data.wind_gust,
    windDeg: data.wind_deg,
    rain: data.rain,
    snow: data.snow,
    weather: {
      id: data.weather?.id,
      main: data.weather?.main,
      description: data.weather?.description,
      icon: data.weather?.icon
    }
  };
};

const openWeatherCurrentToData = (current: OpenWeatherCurrentData): WeatherCurrentData => {
  /* eslint-disable-next-line  @typescript-eslint/camelcase */
  const { sunrise, sunset, temp, feels_like, ...data } = current;
  return {
    sunrise,
    sunset,
    temp,
    /* eslint-disable-next-line  @typescript-eslint/camelcase */
    feelsLike: feels_like,
    ...openWeatherDataToData(data)
  };
};

const openWeatherHourlyToData = (hourly: OpenWeatherHourlyData): WeatherHourlyData => {
  /* eslint-disable-next-line  @typescript-eslint/camelcase */
  const { temp, feels_like, ...data } = hourly;
  return {
    temp,
    /* eslint-disable-next-line  @typescript-eslint/camelcase */
    feelsLike: feels_like,
    ...openWeatherDataToData(data)
  };
};

const openWeatherDailyToData = (daily: OpenWeatherDailyData): WeatherDailyData => {
  /* eslint-disable-next-line  @typescript-eslint/camelcase */
  const { sunrise, sunset, temp, feels_like, ...data } = daily;
  return {
    sunrise,
    sunset,
    temp,
    /* eslint-disable-next-line  @typescript-eslint/camelcase */
    feelsLike: feels_like,
    ...openWeatherDataToData(data)
  };
};

const openWeatherOneCallResponseToData = (response: WeatherFetchResponsePayload): WeatherData => {
  return {
    lat: response.lat,
    lon: response.lon,
    timezone: response.timezone,
    current: openWeatherCurrentToData(response.current),
    hourly: response.hourly.map(openWeatherHourlyToData),
    daily: response.daily.map(openWeatherDailyToData)
  };
};

export const weatherTransformers = {
  openWeatherOneCallResponseToData
};
