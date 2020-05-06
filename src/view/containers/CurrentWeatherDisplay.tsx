import React from 'react';

import { useSelector } from 'store/hooks';
import { useConvertTemperature } from 'store/view/settings/hooks';

import { formatTime } from 'utils';

import { Stack } from 'view/components/layouts/Stack';
import { Icon } from 'view/components/primitives/Icon';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';
import { selectors } from 'store/selectors';

export const CurrentWeatherDisplay = () => {
  const convertTemperature = useConvertTemperature();

  const timezone = useSelector(selectors.location.getTimezone);
  const weatherData = useSelector(selectors.location.getCurrentWeather);

  if (!weatherData) return <div>loading</div>;

  const { time, description, temp, icon } = weatherData;

  return (
    <Stack gap={1} horizontalAlignment="center" padding={1}>
      <Text as={TextComponent.H1} type={TextType.HEADER}>
        {time ? formatTime(new Date(time * 1000), timezone) : 'Loading...'}
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
