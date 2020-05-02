import React from 'react';

import { buildStyles } from './styles';
import { Box } from '../Box';

interface Props {
  children: React.ReactNode;
}

export const Row = (props: Props) => {
  const { children } = props;
  const styles = buildStyles();

  return <Box css={styles.row}>{children}</Box>;
};
