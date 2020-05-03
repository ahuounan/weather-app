import React from 'react';
import { CSSObject } from '@emotion/core';

import { useTheme } from 'view/theme/hooks';
import { makeRem } from 'view/theme/utils';

interface Props {
  src: string;
}

const buildStyles = (): Record<string, CSSObject> => ({
  icon: {}
});

export const Icon = (props: Props) => {
  const { src } = props;
  const theme = useTheme();
  const styles = buildStyles();

  return (
    <img
      src={src}
      css={[{ height: makeRem(theme.scale[4]), width: makeRem(theme.scale[4]) }, styles]}
      {...props}
    />
  );
};
