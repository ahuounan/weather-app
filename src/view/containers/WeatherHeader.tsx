import React from 'react';

import { geocodeSelectors } from 'store/data/geocode/selectors';
import { useSelector } from 'store/hooks';

import { formatDate } from 'utils';

import { Stack } from 'view/components/layouts/Stack';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';

export const WeatherHeader = () => {
  const label = useSelector(geocodeSelectors.getLocationLabel);

  return (
    <Stack gap={1} verticalAlignment="center">
      <Text as={TextComponent.H2} type={TextType.SUBHEADER}>
        {label || 'Loading...'}
      </Text>
      <Text as={TextComponent.H2} type={TextType.SUBHEADER}>
        {formatDate(new Date())}
      </Text>
    </Stack>
  );
};
