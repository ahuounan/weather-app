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
    <Stack gap={1} verticalAlignment="center" padding={1}>
      <Text
        styles={{ color: 'white', whiteSpace: 'normal' }}
        as={TextComponent.H2}
        type={TextType.SUBHEADER}
      >
        {label}
      </Text>
      <Text styles={{ color: 'white' }} as={TextComponent.H2} type={TextType.SUBHEADER}>
        {formatDate(new Date())}
      </Text>
    </Stack>
  );
};
