import { BackgroundPhotoState } from './backgroundPhoto/types';
import { GeocodeState } from './geocode/types';
import { WeatherState } from './weather/types';

export interface ModelState {
  backgroundPhoto: BackgroundPhotoState;
  geocode: GeocodeState;
  weather: WeatherState;
}
