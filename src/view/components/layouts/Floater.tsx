import React from 'react';
import { CSSObject } from '@emotion/core';

import { CSSObjects } from 'types/styles';

import { Box } from './Box';

interface Props {
  children: React.ReactNode;
  styles?: CSSObjects;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  flex?: number;
}

const buildStyles = (): Record<string, CSSObject> => ({
  floater: {
    position: 'absolute'
  }
});

export const Floater = (props: Props) => {
  const { children, flex, styles, top, right, bottom, left } = props;
  const defaultStyles = buildStyles();

  return (
    <Box flex={flex} styles={[defaultStyles.floater, { top, right, bottom, left }, styles]}>
      {children}
    </Box>
  );
};
