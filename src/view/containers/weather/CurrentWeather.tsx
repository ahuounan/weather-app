import React from 'react';

import { useSelector } from 'store/hooks';

import { selectors } from 'store/selectors';

import { Stack } from 'view/components/layouts/Stack';
import { Loader } from 'view/components/primitives/Loader';
import { Icon } from 'view/components/primitives/Icon';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';

import { formatTime } from 'utils';

import { getLocationTimezone, getLocationCurrentWeather } from './selectors';

export const CurrentWeather = () => {
  const timezone = useSelector(getLocationTimezone);
  const weatherData = useSelector(getLocationCurrentWeather);
  const formatTemp = useSelector(selectors.view.settings.getFormatTemperature);

  if (!weatherData) return <Loader />;

  const { time, description, temp, icon } = weatherData;

  return (
    <Stack
      gap={0}
      horizontalAlignment="center"
      padding={1}
      styles={{ background: 'rgba(0, 0, 0, 0.85)' }}
    >
      <Text as={TextComponent.H2} type={TextType.SUBHEADER} styles={{ color: 'white' }}>
        {formatTime(new Date(time), timezone)}
      </Text>
      {icon && description && (
        <Icon
          width={10}
          height={10}
          alt={description}
          src={`http://openweathermap.org/img/w/${icon}.png`}
        />
      )}
      <Text as={TextComponent.H2} type={TextType.SUBHEADER} styles={{ color: 'white' }}>
        {formatTemp(temp)}
      </Text>
    </Stack>
  );
};
