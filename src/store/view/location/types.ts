import { Location } from 'models/location';

export interface LocationState {
  location: {
    lat?: number;
    lng?: number;
  };
}

export interface SetLocationPayload {
  location: Location;
}
