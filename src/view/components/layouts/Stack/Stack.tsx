import React from 'react';

import { Box } from '../Box';
import { buildStyles } from './styles';

interface Props {
  children: React.ReactNode;
}

export const Stack = (props: Props) => {
  const { children } = props;
  const styles = buildStyles();

  return <Box styles={styles.stack}>{children}</Box>;
};
