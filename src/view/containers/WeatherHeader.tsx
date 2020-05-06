import React from 'react';

import { useSelector } from 'store/hooks';
import { selectors } from 'store/selectors';

import { Stack } from 'view/components/layouts/Stack';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';

import { formatDate } from 'utils';

export const WeatherHeader = () => {
  const label = useSelector(selectors.location.getLabel);

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
