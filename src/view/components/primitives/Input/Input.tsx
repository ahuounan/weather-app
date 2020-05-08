import React from 'react';
import { omit } from 'lodash';

import { useTheme } from 'view/theme/hooks';

import { buildStyles } from './styles';
import { InputProps, InputType } from './types';

export const Input = (props: InputProps) => {
  const theme = useTheme();
  const styles = buildStyles(theme);

  switch (props.type) {
    case InputType.BUTTON: {
      const { children, css } = props;
      const remainingProps = omit(props, 'children', 'css', 'type');

      return (
        <button css={[styles.default, styles[InputType.BUTTON], css]} {...remainingProps}>
          {children}
        </button>
      );
    }
    case InputType.SUBMIT: {
      const { css } = props;
      const remainingProps = omit(props, 'css');

      return (
        <input
          type="submit"
          css={[styles.default, styles[InputType.SUBMIT], css]}
          {...remainingProps}
        />
      );
    }
    case InputType.TEXT: {
      const { css } = props;
      const remainingProps = omit(props, 'css');

      return (
        <input
          type="text"
          css={[styles.default, styles[InputType.TEXT], css]}
          {...remainingProps}
        />
      );
    }
    case InputType.CHECKBOX: {
      const { css } = props;
      const remainingProps = omit(props, 'css');

      return (
        <input
          type="checkbox"
          css={[styles.default, styles[InputType.CHECKBOX], css]}
          {...remainingProps}
        />
      );
    }
    case InputType.RADIO: {
      const { css } = props;
      const remainingProps = omit(props, 'css');

      return (
        <input
          type="radio"
          css={[styles.default, styles[InputType.RADIO], css]}
          {...remainingProps}
        />
      );
    }
  }
};
