import React from 'react';

import { Stack } from 'view/components/layouts/Stack';

import { buildStyles } from './styles';
import { InputConfig } from './types';
import { Row } from 'view/components/layouts/Row';
import { Text } from 'view/components/primitives/Text';
import { TextType, TextComponent } from 'view/components/primitives/Text/types';
import { Input } from 'view/components/primitives/Input';

interface Props {
  inputs: InputConfig[];
}

export const Form = (props: Props) => {
  const { inputs } = props;
  const styles = buildStyles();

  return (
    <Stack>
      {inputs.map(({ component, label, type }) => {
        return (
          <Row key={label}>
            <Text as={TextComponent.LABEL} type={TextType.BODY}>
              {label}
            </Text>
            <Input type={type} as={component} />
          </Row>
        );
      })}
    </Stack>
  );
};
