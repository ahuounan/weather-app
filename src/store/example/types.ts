import { Dictionary } from 'types';

export interface PaintingsState {
  paintings: Dictionary<Painting>;
  paintingsList: number[];
  isFetching: boolean;
  error: boolean;
}

export interface PaintingsFetchRequestPayload {}

export type PaintingsFetchResponsePayload = PaintingRaw[];

export interface PaintingRaw {
  name_cn: string;
  name_en: string;
  series_n: number;
  medium_cn: string;
  medium_en: string;
  dimensions: string;
  year: number;
  id: number;
  collection: number;
  collection_name: string;
  src_t: string;
  src_l: string;
  src_m: string;
  src_h: string;
}

export interface Painting {
  id: number;
  name: string;
  medium: string;
  dimensions: string;
  year: number;
  collection: number;
  collectionName: string;
  srcT: string;
  srcL: string;
  srcM: string;
  srcH: string;
}
