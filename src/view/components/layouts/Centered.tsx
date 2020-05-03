import React from 'react';
import { CSSObjects } from 'types/styles';

import { Box } from './Box';

interface Props {
  children?: React.ReactNode;
  flex?: number;
}

const buildStyles = (): Record<string, CSSObjects> => ({
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const Centered = (props: Props) => {
  const { children, flex } = props;
  const styles = buildStyles();

  return (
    <Box flex={flex} styles={styles.centered}>
      {children}
    </Box>
  );
};
