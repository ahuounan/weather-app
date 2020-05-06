import { Location } from './location';

export interface Geocode extends Location {
  label: string;
  id: string;
}
