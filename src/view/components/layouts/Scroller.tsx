import React from 'react';

import { Box } from './Box';

interface Props {
  children?: React.ReactNode;
  flex?: number;
  scrollY?: boolean;
  scrollX?: boolean;
}

export const Scroller = (props: Props) => {
  const { children, flex, scrollX = false, scrollY = false } = props;
  return (
    <Box
      flex={flex}
      styles={{
        overflowX: scrollX ? 'scroll' : 'hidden',
        overflowY: scrollY ? 'scroll' : 'hidden'
      }}
    >
      {children}
    </Box>
  );
};
