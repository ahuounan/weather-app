export const getKey = (lat: number, lng: number) =>
  `${lat.toFixed(2)}:${lng.toFixed(2)}`;
