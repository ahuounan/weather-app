import { SearchState } from './search/types';
import { WeatherViewState } from './weather/types';

export interface ViewState {
  search: SearchState;
  weather: WeatherViewState;
}
