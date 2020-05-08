import { Weather } from 'models/weather';
import { Location } from 'models/location';

export interface WeatherState {
  fetching: boolean;
  polling: boolean;
  error: boolean;
  data: {
    [key: string]: Weather;
  };
}

export interface WeatherFetchSuccessPayload {
  weather: Weather;
}

export interface WeatherFetchRequestPayload {
  location: Location;
}

export interface WeatherStartSubscriptionPayload {
  location: Location;
}
