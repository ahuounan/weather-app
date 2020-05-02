import React from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from 'view/components/primitives/Input';
import {
  InputComponent,
  InputType
} from 'view/components/primitives/Input/types';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';

export const Settings = () => {
  const history = useHistory();
  return (
    <div>
      Settings
      <Input
        as={InputComponent.BUTTON}
        type={InputType.BUTTON}
        onClick={() => history.goBack()}
      >
        <Text as={TextComponent.P} type={TextType.BODY}>
          Back
        </Text>
      </Input>
    </div>
  );
};
