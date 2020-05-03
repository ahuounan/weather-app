import React, { CSSProperties } from 'react';
import { CSSObject } from '@emotion/core';

import { CSSObjects } from 'types/styles';
import { makeRem } from 'view/theme/utils';
import { useTheme } from 'view/theme/hooks';

import { Box } from './Box';

interface Props {
  children: React.ReactNode;
  flex?: number;
  styles?: CSSObjects;
  gap: number;
  horizontalAlignment?: CSSProperties['justifyContent'];
  verticalAlignment?: CSSProperties['alignItems'];
  padding?: number;
}

const buildStyles = (): Record<string, CSSObject> => ({
  row: {
    display: 'flex'
  }
});

export const Row = (props: Props) => {
  const { children, flex, gap, padding, horizontalAlignment, verticalAlignment, styles } = props;
  const theme = useTheme();
  const defaultStyles = buildStyles();

  return (
    <Box
      flex={flex}
      styles={[
        defaultStyles.row,
        styles,
        {
          '& > * + *': {
            marginLeft: `${makeRem(theme.scale[gap])} !important`
          },
          '& > *': {
            alignSelf: verticalAlignment
          },
          alignItems: horizontalAlignment,
          justifyContent: verticalAlignment,
          padding: padding && makeRem(theme.scale[padding])
        }
      ]}
    >
      {children}
    </Box>
  );
};
