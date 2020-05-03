import React from 'react';
import { CSSObject } from '@emotion/core';

import { CSSObjects } from 'types/styles';

import { Box } from './Box';

interface Props {
  children: React.ReactNode;
  flex?: number;
  styles?: CSSObjects;
}

const buildStyles = (): Record<string, CSSObject> => ({
  grid: {}
});

export const Grid = (props: Props) => {
  const { children, flex, styles } = props;
  const defaultStyles = buildStyles();

  return (
    <Box flex={flex} styles={[defaultStyles.grid, styles]}>
      {children}
    </Box>
  );
};
