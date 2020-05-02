import React from 'react';

import { Stack } from 'view/components/layouts/Stack';
import { Row } from 'view/components/layouts/Row';
import { Text } from 'view/components/primitives/Text';
import { TextType, TextComponent } from 'view/components/primitives/Text/types';
import { Input } from 'view/components/primitives/Input';
import {
  InputType,
  InputComponent
} from 'view/components/primitives/Input/types';

import { buildStyles } from './styles';
import { InputConfig, FormData, FormState } from './types';
import { useFormData } from './hooks';

interface Props {
  inputs: InputConfig[];
  submitState: FormState;
  onSubmit: (data: FormData) => void;
}

export const Form = (props: Props) => {
  const { inputs, onSubmit } = props;
  const styles = buildStyles();
  const { formData, updateFormData } = useFormData(inputs);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} css={styles.container}>
      <Stack>
        {inputs.map(({ component, key, label, type }) => {
          const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            updateFormData(key, event.target.value);
          };

          return (
            <Row css={styles.row} key={key}>
              <Text
                css={styles.label}
                htmlFor={key}
                as={TextComponent.LABEL}
                type={TextType.BODY}
              >
                {label}
              </Text>
              <Input
                css={styles.input}
                name={key}
                id={key}
                type={type}
                as={component}
                value={formData[key]}
                onChange={handleChange}
              />
            </Row>
          );
        })}
        <Input type={InputType.SUBMIT} as={InputComponent.INPUT} />
      </Stack>
    </form>
  );
};
