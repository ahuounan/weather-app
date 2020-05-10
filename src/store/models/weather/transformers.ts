import {
  OpenWeatherCurrent,
  OpenWeatherDaily,
  OpenWeatherHourly,
  OpenWeatherCommon,
  OpenWeatherOneCallResponse
} from 'models/api/openWeatherApi';
import {
  WeatherCommon,
  Weather,
  WeatherDaily,
  WeatherHourly,
  WeatherCurrent
} from 'models/weather';

const openWeatherToWeatherCommon = (data: OpenWeatherCommon): WeatherCommon => {
  return {
    time: data.dt * 1000,
    pressure: data.pressure,
    humidity: data.humidity,
    dewPoint: data.dew_point,
    clouds: data.clouds,
    uvi: data.uvi,
    visibility: data.visibility,
    windSpeed: data.wind_speed,
    windGust: data.wind_gust,
    windDeg: data.wind_deg,
    rain: data.rain && data.rain['1h'],
    snow: data.snow && data.snow['1h'],
    icon: data.weather[0].icon,
    description: data.weather[0].description
  };
};

const openWeatherCurrentToCurrent = (current: OpenWeatherCurrent): WeatherCurrent => {
  /* eslint-disable-next-line  @typescript-eslint/camelcase */
  const { sunrise, sunset, temp, feels_like, ...data } = current;
  return {
    sunrise: sunrise * 1000,
    sunset: sunset * 1000,
    temp,
    /* eslint-disable-next-line  @typescript-eslint/camelcase */
    feelsLike: feels_like,
    ...openWeatherToWeatherCommon(data)
  };
};

const openWeatherHourlyToData = (hourly: OpenWeatherHourly): WeatherHourly => {
  /* eslint-disable-next-line  @typescript-eslint/camelcase */
  const { temp, feels_like, ...data } = hourly;
  return {
    temp,
    /* eslint-disable-next-line  @typescript-eslint/camelcase */
    feelsLike: feels_like,
    ...openWeatherToWeatherCommon(data)
  };
};

const openWeatherDailyToData = (daily: OpenWeatherDaily): WeatherDaily => {
  /* eslint-disable-next-line  @typescript-eslint/camelcase */
  const { sunrise, sunset, temp, feels_like, ...data } = daily;
  return {
    sunrise: sunrise * 1000,
    sunset: sunset * 1000,
    tempMorn: temp.morn,
    tempDay: temp.day,
    tempEve: temp.eve,
    tempNight: temp.night,
    tempMin: temp.min,
    tempMax: temp.max,
    /* eslint-disable-next-line  @typescript-eslint/camelcase */
    feelsLikeMorn: feels_like.morn,
    /* eslint-disable-next-line  @typescript-eslint/camelcase */
    feelsLikeDay: feels_like.day,
    /* eslint-disable-next-line  @typescript-eslint/camelcase */
    feelsLikeEve: feels_like.eve,
    /* eslint-disable-next-line  @typescript-eslint/camelcase */
    feelsLikeNight: feels_like.night,
    ...openWeatherToWeatherCommon(data)
  };
};

const openWeatherOneCallResponseToWeather = (response: OpenWeatherOneCallResponse): Weather => {
  return {
    lat: response.lat,
    lng: response.lon,
    timezone: response.timezone,
    current: openWeatherCurrentToCurrent(response.current),
    hourly: response.hourly.map(openWeatherHourlyToData),
    daily: response.daily.map(openWeatherDailyToData)
  };
};

export const weatherTransformers = {
  openWeatherOneCallResponseToWeather
};
