export interface UnsplashPhotoData {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  categories: string[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: string[];
  user: any;
  exif: any;
  location: any;
  views: number;
  downloads: number;
}

export type UnsplashRandomPhotoResponse = UnsplashPhotoData;
