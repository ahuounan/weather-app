import { GeocodeState } from './data/geocode/types';
import { WeatherState } from './data/weather/types';
import { SettingsState } from './settings/types';

export interface RootState {
  geocode: GeocodeState;
  weather: WeatherState;
  settings: SettingsState;
}
