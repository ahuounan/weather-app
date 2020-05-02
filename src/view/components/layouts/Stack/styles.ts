import { CSSObject } from '@emotion/core';

export const buildStyles = (): Record<string, CSSObject> => ({
  stack: {
    display: 'flex',
    flexDirection: 'column'
  }
});
