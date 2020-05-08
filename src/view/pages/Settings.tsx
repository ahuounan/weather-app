import React from 'react';
import { Link } from 'react-router-dom';

import { icons } from 'assets';

import { DataSection } from 'store/view/settings/types';

import { TextComponent, TextType } from 'view/components/primitives/Text/types';
import { Row } from 'view/components/layouts/Row';
import { Stack } from 'view/components/layouts/Stack';
import { Text } from 'view/components/primitives/Text';
import { Icon } from 'view/components/primitives/Icon';
import { TemperatureUnitSelect } from 'view/containers/settings/TemperatureUnitSelect';
import { DataSeriesSelect } from 'view/containers/settings/DataSeriesSelect';
import { WrapRow } from 'view/components/layouts/WrapRow';
import { DataSeriesSettings } from 'view/containers/settings/DataSeriesSettings';

export const Settings = () => {
  return (
    <Stack gap={1}>
      <Row gap={1} verticalAlignment="center" horizontalAlignment="space-between">
        <Text as={TextComponent.H2} type={TextType.SUBHEADER}>
          Settings
        </Text>
        <Link to="/weather">
          <Icon alt="Close" src={icons.close} />
        </Link>
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
