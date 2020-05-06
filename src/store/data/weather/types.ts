import { Weather } from 'models/weather';

export interface WeatherState {
  fetching: boolean;
  polling: boolean;
  error: boolean;
  data: {
    [key: string]: Weather;
  };
}

export interface WeatherFetchSuccessPayload extends Weather {}
