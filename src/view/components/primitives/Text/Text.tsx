import React from 'react';
import { omit } from 'lodash';

import { buildStyles } from './styles';
import { TextProps, TextComponent } from './types';
import { useTheme } from 'view/theme/hooks';

export const Text = (props: TextProps) => {
  const { children } = props;
  const theme = useTheme();
  const styles = buildStyles(theme);

  switch (props.as) {
    case TextComponent.P: {
      const { type } = props;
      const remainingProps = omit(props, 'as', 'type');

      return (
        <p css={[styles.default, styles[type]]} {...remainingProps}>
          {children}
        </p>
      );
    }
    case TextComponent.LABEL: {
      const { type } = props;
      const remainingProps = omit(props, 'as', 'type');

      return (
        <label css={[styles.default, styles[type]]} {...remainingProps}>
          {children}
        </label>
      );
    }
    case TextComponent.H1: {
      const { type } = props;
      const remainingProps = omit(props, 'as', 'type');

      return (
        <h1 css={[styles.default, styles[type]]} {...remainingProps}>
          {children}
        </h1>
      );
    }
    case TextComponent.H2: {
      const { type } = props;
      const remainingProps = omit(props, 'as', 'type');

      return (
        <h2 css={[styles.default, styles[type]]} {...remainingProps}>
          {children}
        </h2>
      );
    }
  }
};
