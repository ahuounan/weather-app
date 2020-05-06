import { SearchState } from './search/types';
import { WeatherViewState } from './weather/types';
import { SettingsState } from './settings/types';

export interface ViewState {
  search: SearchState;
  weather: WeatherViewState;
  settings: SettingsState;
}
