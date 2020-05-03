import React from 'react';

import { CSSObjects } from 'types/styles';

import { Box } from '../Box';
import { buildStyles } from './styles';

interface Props {
  children: React.ReactNode;
  styles?: CSSObjects;
}

export const Row = (props: Props) => {
  const { children, styles } = props;
  const defaultStyles = buildStyles();

  return <Box styles={[defaultStyles.row, styles]}>{children}</Box>;
};
