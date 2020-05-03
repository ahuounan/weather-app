import React from 'react';
import { CSSObject } from '@emotion/core';

import { Box } from 'view/components/layouts/Box';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';
import { Input } from 'view/components/primitives/Input';
import { InputComponent, InputType } from 'view/components/primitives/Input/types';

interface Props {
  label: string;
  onChange: () => void;
  checked: boolean;
}

const buildStyles = (): Record<string, CSSObject> => ({
  container: {},
  label: {},
  input: {}
});

export const InputBoolean = (props: Props) => {
  const { label, onChange, checked } = props;
  const styles = buildStyles();

  return (
    <Box styles={styles.container}>
      <Text styles={styles.label} as={TextComponent.LABEL} type={TextType.BODY}>
        {label}
      </Text>
      <Input
        styles={styles.input}
        as={InputComponent.INPUT}
        type={InputType.CHECKBOX}
        onChange={onChange}
        checked={checked}
      />
    </Box>
  );
};
