import React from 'react';

import { buildStyles } from './styles';
import { Box } from '../Box';
import { CSSObjects } from 'types/styles';

interface Props {
  children: React.ReactNode;
  styles?: CSSObjects;
}

export const Row = (props: Props) => {
  const { children, styles } = props;
  const defaultStyles = buildStyles();

  return <Box styles={[defaultStyles.row, styles]}>{children}</Box>;
};
