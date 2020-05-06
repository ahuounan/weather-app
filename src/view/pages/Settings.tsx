import React from 'react';
import { useHistory } from 'react-router-dom';

import { icons } from 'assets';

import { DataSection } from 'models/settings';

import { InputComponent, InputType } from 'view/components/primitives/Input/types';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';
import { Row } from 'view/components/layouts/Row';
import { Stack } from 'view/components/layouts/Stack';
import { Input } from 'view/components/primitives/Input';
import { Text } from 'view/components/primitives/Text';
import { Icon } from 'view/components/primitives/Icon';
import { TemperatureUnitSelect } from 'view/containers/TemperatureUnitSelect';
import { DataSeriesSelect } from 'view/containers/DataSeriesSelect';
import { WrapRow } from 'view/components/layouts/WrapRow';
import { DataSeriesSettings } from 'view/containers/DataSeriesSettings';

export const Settings = () => {
  const history = useHistory();

  return (
    <Stack gap={1}>
      <Row gap={1} verticalAlignment="center" horizontalAlignment="space-between">
        <Text as={TextComponent.H2} type={TextType.SUBHEADER}>
          Settings
        </Text>
        <Input as={InputComponent.BUTTON} type={InputType.BUTTON} onClick={() => history.goBack()}>
          <Icon src={icons.close} alt="Back" />
        </Input>
      </Row>
      <Stack gap={1}>
        <Row gap={1}>
          <TemperatureUnitSelect />
          <DataSeriesSelect />
        </Row>
        <WrapRow gap={1}>
          <DataSeriesSettings section={DataSection.CURRENT} />
          <DataSeriesSettings section={DataSection.HOURLY} />
          <DataSeriesSettings section={DataSection.DAILY} />
        </WrapRow>
      </Stack>
    </Stack>
  );
};
