import React from 'react';

import { useSelector } from 'store/hooks';

import { Stack } from 'view/components/layouts/Stack';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';

import { formatDate } from 'utils';

import { getLocationLabel } from './selectors';

export const LocationDate = () => {
  const label = useSelector(getLocationLabel);

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
