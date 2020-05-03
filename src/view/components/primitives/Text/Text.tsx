import React from 'react';
import { omit } from 'lodash';

import { buildStyles } from './styles';
import { TextProps, TextComponent } from './types';

export const Text = (props: TextProps) => {
  const { children, styles } = props;
  const defaultStyles = buildStyles();

  switch (props.as) {
    case TextComponent.P: {
      const { type } = props;
      const remainingProps = omit(props, 'as', 'type', 'styles');

      return (
        <p
          css={[defaultStyles.default, defaultStyles[type], styles]}
          {...remainingProps}
        >
          {children}
        </p>
      );
    }
    case TextComponent.LABEL: {
      const { type } = props;
      const remainingProps = omit(props, 'as', 'type', 'styles');

      return (
        <label
          css={[defaultStyles.default, defaultStyles[type], styles]}
          {...remainingProps}
        >
          {children}
        </label>
      );
    }
    case TextComponent.H1: {
      const { type } = props;
      const remainingProps = omit(props, 'as', 'type', 'styles');

      return (
        <h1
          css={[defaultStyles.default, defaultStyles[type], styles]}
          {...remainingProps}
        >
          {children}
        </h1>
      );
    }
    case TextComponent.H2: {
      const { type } = props;
      const remainingProps = omit(props, 'as', 'type', 'styles');

      return (
        <h2
          css={[defaultStyles.default, defaultStyles[type], styles]}
          {...remainingProps}
        >
          {children}
        </h2>
      );
    }
  }
};
