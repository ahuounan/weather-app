import { UnsplashRandomPhotoResponse } from 'models/api/unsplash';

const normalizeApiResponse = (response: UnsplashRandomPhotoResponse): string[] => {
  const { urls } = response;
  return [urls.thumb, urls.small, urls.regular, urls.full];
};

export const BackgroundPhotoTransformer = {
  normalizeApiResponse
};
