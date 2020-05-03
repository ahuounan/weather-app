import React, { CSSProperties } from 'react';
import { CSSObject } from '@emotion/core';

import { CSSObjects } from 'types/styles';

import { Row } from './Row';
import { makeRem } from 'view/theme/utils';
import { useTheme } from 'view/theme/hooks';

interface Props {
  children: React.ReactNode;
  flex?: number;
  styles?: CSSObjects;
  gap: number;
  padding?: number;
  horizontalAlignment?: CSSProperties['justifyContent'];
  verticalAlignment?: CSSProperties['alignItems'];
}

const buildStyles = (): Record<string, CSSObject> => ({
  wrapper: {
    flexWrap: 'wrap'
  }
});

export const WrapRow = (props: Props) => {
  const { children, flex, gap, padding, horizontalAlignment, verticalAlignment, styles } = props;
  const theme = useTheme();
  const defaultStyles = buildStyles();

  return (
    <Row
      flex={flex}
      gap={gap}
      padding={padding}
      styles={[
        defaultStyles.wrapper,
        {
          justifyContent: horizontalAlignment,
          alignItems: verticalAlignment,
          marginLeft: `-${makeRem(theme.scale[gap])}`,
          '& > *:first-of-type': {
            marginLeft: makeRem(theme.scale[gap])
          }
        },
        styles
      ]}
    >
      {children}
    </Row>
  );
};
