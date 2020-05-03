import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { icons } from 'assets';
import { geocodeSelectors } from 'store/data/geocode/selectors';
import { RootState } from 'store/types';
import { useSelector } from 'store/hooks';
import { WeatherActions } from 'store/data/weather/actions';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';
import { weatherSelectors } from 'store/data/weather/selectors';
import { Row } from 'view/components/layouts/Row';
import { WrapRow } from 'view/components/layouts/WrapRow';
import { Stack } from 'view/components/layouts/Stack';
import { Scroller } from 'view/components/layouts/Scroller';
import { Icon } from 'view/components/primitives/Icon';
import { useConvertTemperature } from 'store/settings/hooks';

const formatDate = (date: Date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const formatTime = (time: Date, timeZone: string, showSeconds = true) => {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: showSeconds ? 'numeric' : undefined,
    timeZone
  };
  return new Intl.DateTimeFormat('en-US', options).format(time);
};

export const Weather = () => {
  const { id } = useParams();
  const result = useSelector((state: RootState) => geocodeSelectors.getDataById(state, id));

  if (!result) {
    return <div>error!</div>;
  }

  const {
    geometry: { lat, lng },
    label
  } = result;

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(WeatherActions.weatherStartSubscription({ lat, lng }));
    return () => {
      dispatch(WeatherActions.weatherStopSubscription());
    };
  }, [lat, lng]);

  const weatherData = useSelector((state: RootState) =>
    weatherSelectors.getWeatherDataByLatLng(state, lat, lng)
  );

  const convertTemperature = useConvertTemperature();

  return (
    <Stack gap={0} verticalAlignment="space-between">
      <WrapRow gap={0} horizontalAlignment="space-between" padding={1}>
        <Row gap={1} verticalAlignment="center">
          <Text as={TextComponent.H2} type={TextType.SUBHEADER}>
            {label}
          </Text>
          <WrapRow gap={1}>
            <Link to="/search">
              <Icon src={icons.search} />
            </Link>
            <Link to="/settings">
              <Icon src={icons.settings} />
            </Link>
          </WrapRow>
        </Row>
        <Text as={TextComponent.H2} type={TextType.SUBHEADER}>
          {formatDate(new Date())}
        </Text>
      </WrapRow>
      {weatherData?.current && (
        <WrapRow gap={4} horizontalAlignment="center" padding={1}>
          <Text as={TextComponent.H1} type={TextType.HEADER}>
            {formatTime(new Date(weatherData?.current?.timestamp * 1000), weatherData.timezone)}
          </Text>
          <Text as={TextComponent.H1} type={TextType.HEADER}>
            {weatherData?.current?.weather.icon}
          </Text>
          <Text as={TextComponent.H1} type={TextType.HEADER}>
            {convertTemperature(weatherData?.current?.temp)}
          </Text>
        </WrapRow>
      )}
      <Scroller scrollX>
        <Row gap={1}>
          {weatherData?.hourly.map(data => (
            <Stack gap={1} key={data.timestamp} padding={2}>
              <Text
                as={TextComponent.H2}
                type={TextType.SUBHEADER}
                styles={{ whiteSpace: 'nowrap' }}
              >
                {formatTime(new Date(data?.timestamp * 1000), weatherData.timezone, false)}
              </Text>
              <Text as={TextComponent.H2} type={TextType.SUBHEADER}>
                {data?.weather.icon}
              </Text>
              <Text as={TextComponent.H2} type={TextType.SUBHEADER}>
                {convertTemperature(data?.temp)}
              </Text>
            </Stack>
          ))}
        </Row>
      </Scroller>
    </Stack>
  );
};
