import React, { CSSProperties } from 'react';
import { CSSObject } from '@emotion/core';

import { useTheme } from 'view/theme/hooks';
import { makeRem } from 'view/theme/utils';

import { Box } from './Box';

interface Props {
  children: React.ReactNode;
  flex?: number;
  gap: number;
  horizontalAlignment?: CSSProperties['alignItems'];
  verticalAlignment?: CSSProperties['justifyContent'];
  padding?: number;
}

const buildStyles = (): Record<string, CSSObject> => ({
  stack: {
    display: 'flex',
    flexDirection: 'column'
  }
});

export const Stack = (props: Props) => {
  const { children, flex, gap, padding, horizontalAlignment, verticalAlignment } = props;
  const theme = useTheme();
  const styles = buildStyles();

  return (
    <Box
      flex={flex}
      styles={[
        styles.stack,
        {
          '& > * + *': {
            marginTop: `${makeRem(theme.scale[gap])} !important`
          },
          '& > *': {
            alignSelf: horizontalAlignment
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
