import { http } from 'services';
import { OpenWeatherOneCallResponse } from 'models/openWeatherApi';

const apiKey = process.env.OPEN_WEATHER_API_KEY;

const getUrl = (lat: number, lon: number) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

const get = async (lat: number, long: number) =>
  await http.get<OpenWeatherOneCallResponse>(getUrl(lat, long));

export const WeatherApi = {
  get
};
