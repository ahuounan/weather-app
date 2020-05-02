import React from 'react';
import { CSSObjects } from 'types/styles';

interface Props {
  children: React.ReactNode;
  styles?: CSSObjects;
}

export const Box = (props: Props) => {
  const { children, styles } = props;

  return <div css={styles}>{children}</div>;
};
