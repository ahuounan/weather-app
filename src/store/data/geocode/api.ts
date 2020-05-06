import { http } from 'services';
import { OpenCageApiResponse } from 'models/openCageApi';

const apiKey = process.env.OPEN_CAGE_API_KEY;

const getUrl = (placename: string) =>
  `https://api.opencagedata.com/geocode/v1/json?q=${placename}&key=${apiKey}`;

const get = async (placename: string) => {
  return await http.get<OpenCageApiResponse>(getUrl(placename));
};

export const GeocodeApi = {
  get
};
