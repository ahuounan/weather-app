import { GeocodeState } from './geocode/types';
import { WeatherState } from './weather/types';

export interface DataState {
  geocode: GeocodeState;
  weather: WeatherState;
}
