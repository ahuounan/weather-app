import React from 'react';

import { buildStyles } from './styles';
import { TextProps, TextComponent } from './types';

export const Text = (props: TextProps) => {
  const { children } = props;
  const styles = buildStyles();

  switch (props.as) {
    case TextComponent.P: {
      const { as, type, ...remainingProps } = props;

      return (
        <p css={[styles.default, styles[type]]} {...remainingProps}>
          {children}
        </p>
      );
    }
    case TextComponent.LABEL: {
      const { as, type, ...remainingProps } = props;

      return (
        <label css={[styles.default, styles[type]]} {...remainingProps}>
          {children}
        </label>
      );
    }
    case TextComponent.H1: {
      const { as, type, ...remainingProps } = props;

      return (
        <h1 css={[styles.default, styles[type]]} {...remainingProps}>
          {children}
        </h1>
      );
    }
    case TextComponent.H2: {
      const { as, type, ...remainingProps } = props;

      return (
        <h2 css={[styles.default, styles[type]]} {...remainingProps}>
          {children}
        </h2>
      );
    }
  }
};
