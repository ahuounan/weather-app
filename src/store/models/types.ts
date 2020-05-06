import { GeocodeState } from './geocode/types';
import { WeatherState } from './weather/types';

export interface ModelState {
  geocode: GeocodeState;
  weather: WeatherState;
}
