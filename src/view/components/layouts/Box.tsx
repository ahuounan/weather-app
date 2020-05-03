import React from 'react';
import { CSSObject } from '@emotion/core';

import { CSSObjects } from 'types/styles';

interface Props {
  children: React.ReactNode;
  styles?: CSSObjects;
  flex?: number;
}

const buildStyles = (): Record<string, CSSObject> => ({
  box: {
    position: 'relative',
    boxSizing: 'border-box'
  }
});

export const Box = (props: Props) => {
  const { children, flex, styles } = props;
  const defaultStyles = buildStyles();

  return <div css={[defaultStyles.box, { flex }, styles]}>{children}</div>;
};
