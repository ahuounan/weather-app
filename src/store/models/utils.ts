import { Location } from 'models/location';

export const getKey = ({ lat, lng }: Location) =>
  typeof lat !== 'number' || typeof lng !== 'number' ? '' : `${lat.toFixed(2)}:${lng.toFixed(2)}`;

export const decodeKey = (key: string) => {
  const [lat, lng] = key.split(':');
  return {
    lat: Number(lat),
    lng: Number(lng)
  };
};
