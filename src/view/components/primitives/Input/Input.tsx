import React from 'react';

import { buildStyles } from './styles';
import { InputProps, InputType } from './types';

export const Input = (props: InputProps) => {
  const styles = buildStyles();

  switch (props.type) {
    case InputType.BUTTON: {
      const { children } = props;

      return <button css={[styles.default, styles[InputType.BUTTON]]}>{children}</button>;
    }
    case InputType.SUBMIT: {
      return <input type="submit" css={[styles.default, styles[InputType.SUBMIT]]} />;
    }
    case InputType.TEXT: {
      return <input type="text" css={[styles.default, styles[InputType.TEXT]]} />;
    }
    case InputType.RADIO: {
      return <input type="radio" css={[styles.default, styles[InputType.RADIO]]} />;
    }
  }
};
