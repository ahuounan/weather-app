import { Location } from 'models/location';

export interface WeatherViewState {
  location: {
    lat?: number;
    lng?: number;
  };
}

export interface SetLocationPayload {
  location: Location;
}
