import { Location } from 'models/location';
import { WeatherStats } from 'models/weather';

export const getKey = ({ lat, lng }: Location) =>
  typeof lat !== 'number' || typeof lng !== 'number' ? '' : `${lat.toFixed(2)}:${lng.toFixed(2)}`;

export const decodeKey = (key: string) => {
  const [lat, lng] = key.split(':');
  return {
    lat: Number(lat),
    lng: Number(lng)
  };
};

const temperatureStats: Partial<Record<WeatherStats, boolean>> = {
  tempMorn: true,
  tempDay: true,
  tempEve: true,
  tempNight: true,
  tempMin: true,
  tempMax: true,
  feelsLikeMorn: true,
  feelsLikeDay: true,
  feelsLikeEve: true,
  feelsLikeNight: true,
  temp: true,
  feelsLike: true,
  dewPoint: true,
  windDeg: true
};

export const isTemperatureStat = (stat: WeatherStats): boolean => !!temperatureStats[stat];

const timeStats: Partial<Record<WeatherStats, boolean>> = {
  sunset: true,
  sunrise: true
};

export const isTimeState = (stat: WeatherStats): boolean => !!timeStats[stat];
