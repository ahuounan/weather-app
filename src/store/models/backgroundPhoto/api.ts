import { http } from 'services';
import { UnsplashRandomPhotoResponse } from 'models/api/unsplash';

const apiKey = process.env.UNSPLASH_API_KEY;

const getUrl = (placename: string) =>
  `https://api.unsplash.com/photos/random?client_id=${apiKey}&query=${placename}%20landscape&orientation=landscape&count=3`;

const get = async (placename: string) => {
  return await http.get<UnsplashRandomPhotoResponse>(getUrl(placename));
};

export const BackgroundPhotoApi = {
  get
};
