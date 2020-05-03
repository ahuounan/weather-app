import React from 'react';
import { CSSObject } from '@emotion/core';

import { Box } from 'view/components/layouts/Box';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';
import { Row } from 'view/components/layouts/Row';
import { Input } from 'view/components/primitives/Input';
import { InputComponent, InputType } from 'view/components/primitives/Input/types';

interface RadioOption {
  key: string;
  title: string;
  checked: boolean;
  onChange: () => void;
}

interface Props {
  title: string;
  options: RadioOption[];
}

const buildStyles = (): Record<string, CSSObject> => ({
  title: {},
  container: {},
  label: {},
  input: {}
});

export const InputRadio = (props: Props) => {
  const { options, title } = props;
  const styles = buildStyles();

  return (
    <Box styles={styles.container}>
      <Text styles={styles.title} as={TextComponent.P} type={TextType.BODY}>
        {title}
      </Text>
      {options.map(({ key, title, checked, onChange }) => (
        <Row gap={1} key={key}>
          <Text styles={styles.label} as={TextComponent.LABEL} type={TextType.BODY}>
            {title}
          </Text>
          <Input
            styles={styles.input}
            as={InputComponent.INPUT}
            type={InputType.RADIO}
            onChange={onChange}
            checked={checked}
          />
        </Row>
      ))}
    </Box>
  );
};
