import React from 'react';
import { CSSObject } from '@emotion/core';

import { useTheme } from 'view/theme/hooks';
import { makeRem } from 'view/theme/utils';

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const buildStyles = (): Record<string, CSSObject> => ({
  icon: {}
});

export const Icon = (props: Props) => {
  const { alt, src, width = 5, height = 5 } = props;
  const theme = useTheme();
  const styles = buildStyles();

  return (
    <img
      alt={alt}
      src={src}
      css={[{ height: makeRem(theme.scale[height]), width: makeRem(theme.scale[width]) }, styles]}
      {...props}
    />
  );
};
