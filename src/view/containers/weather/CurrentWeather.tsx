import React from 'react';

import { useSelector } from 'store/hooks';
import { useConvertTemperature } from 'store/view/settings/hooks';

import { formatTime } from 'utils';

import { Stack } from 'view/components/layouts/Stack';
import { Icon } from 'view/components/primitives/Icon';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';

import { getLocationTimezone, getLocationCurrentWeather } from './selectors';

export const CurrentWeather = () => {
  const convertTemperature = useConvertTemperature();

  const timezone = useSelector(getLocationTimezone);
  const weatherData = useSelector(getLocationCurrentWeather);

  if (!weatherData) return <div>loading</div>;

  const { time, description, temp, icon } = weatherData;
  console.log(time, timezone);

  return (
    <Stack gap={1} horizontalAlignment="center" padding={1}>
      <Text as={TextComponent.H1} type={TextType.HEADER}>
        {time ? formatTime(new Date(time), timezone) : 'Loading...'}
      </Text>
      {icon && description && (
        <Icon
          width={10}
          height={10}
          alt={description}
          src={`http://openweathermap.org/img/w/${icon}.png`}
        />
      )}
      <Text as={TextComponent.H1} type={TextType.HEADER}>
        {temp ? convertTemperature(temp) : 'Loading...'}
      </Text>
    </Stack>
  );
};
