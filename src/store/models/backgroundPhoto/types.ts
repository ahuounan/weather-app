import { Location } from 'models/location';

export type FetchPhotosRequestPayload = {
  location: Location;
};

export type FetchPhotosSuccessPayload = {
  locationKey: string;
  results: string[];
};

export interface BackgroundPhotoState {
  fetching: boolean;
  error: boolean;
  data: {
    [locationKey: string]: string[];
  };
}
