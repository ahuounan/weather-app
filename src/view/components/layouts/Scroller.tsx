import React from 'react';

import { Box } from './Box';
import { CSSObjects } from 'types/styles';

interface Props {
  children?: React.ReactNode;
  flex?: number;
  scrollY?: boolean;
  scrollX?: boolean;
  styles?: CSSObjects;
}

export const Scroller = (props: Props) => {
  const { children, flex, scrollX = false, scrollY = false, styles } = props;
  return (
    <Box
      flex={flex}
      styles={[
        {
          overflowX: scrollX ? 'scroll' : 'hidden',
          overflowY: scrollY ? 'scroll' : 'hidden'
        },
        styles
      ]}
    >
      {children}
    </Box>
  );
};
