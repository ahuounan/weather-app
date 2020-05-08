import { OpenWeatherOneCallResponse } from 'models/api/openWeatherApi';

import { Location } from 'models/location';

import { http } from 'services';

const apiKey = process.env.OPEN_WEATHER_API_KEY;

const getUrl = (location: Location) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lng}&appid=${apiKey}`;

const get = async (location: Location) =>
  await http.get<OpenWeatherOneCallResponse>(getUrl(location));

export const WeatherApi = {
  get
};
