import React from 'react';

import { buildStyles } from './styles';

interface Props {}

export const Icon = (props: Props) => {
  const styles = buildStyles();
  return <img css={styles} {...props} />;
};
