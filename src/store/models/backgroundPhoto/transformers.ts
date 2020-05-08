import { UnsplashRandomPhotoResponse } from 'models/api/unsplash';

const normalizeApiResponse = (response: UnsplashRandomPhotoResponse): string[] =>
  response.map(data => data.urls.full);

export const BackgroundPhotoTransformer = {
  normalizeApiResponse
};
