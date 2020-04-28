import { CSSObject } from '@emotion/core';
import { CSSProperties } from 'react';

export type CSSObj = Pick<CSSObject, keyof CSSProperties>;

export interface Dictionary<T> {
  [key: string]: T;
}

export type OnLoadEvent = React.BaseSyntheticEvent<Event, HTMLImageElement, HTMLImageElement>;
