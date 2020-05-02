import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { geocodeSelectors } from 'store/data/geocode/selectors';
import { RootState } from 'store/types';
import { useSelector } from 'store/hooks';
import { WeatherActions } from 'store/data/weather/actions';
import { Box } from 'view/components/layouts/Box';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';
import { weatherSelectors } from 'store/data/weather/selectors';
import { Row } from 'view/components/layouts/Row';
import { Wrapper } from 'view/components/layouts/Wrapper';
import {
  InputType,
  InputComponent
} from 'view/components/primitives/Input/types';
import { Input } from 'view/components/primitives/Input';

const formatDate = (date: Date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const formatTime = (time: Date, timeZone: string) => {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: timeZone,
    timeZoneName: 'short'
  };
  return new Intl.DateTimeFormat('en-US', options).format(time);
};

export const Weather = () => {
  const { id } = useParams();
  const result = useSelector((state: RootState) =>
    geocodeSelectors.getDataById(state, id)
  );

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

  return (
    <Box>
      <Wrapper>
        <Link to="/search">
          <Text as={TextComponent.P} type={TextType.BODY}>
            Change Location
          </Text>
        </Link>
        <Text as={TextComponent.H1} type={TextType.HEADER}>
          {label}
        </Text>
        <Link to="/settings">
          <Text as={TextComponent.P} type={TextType.BODY}>
            Settings
          </Text>
        </Link>
        <Text as={TextComponent.H1} type={TextType.HEADER}>
          {formatDate(new Date())}
        </Text>
      </Wrapper>
      {weatherData?.current && (
        <Wrapper>
          <Text as={TextComponent.H2} type={TextType.SUBHEADER}>
            {formatTime(
              new Date(weatherData?.current?.timestamp),
              weatherData.timezone
            )}
          </Text>
          <Text as={TextComponent.H2} type={TextType.SUBHEADER}>
            {weatherData?.current?.weather.icon}
          </Text>
          <Text as={TextComponent.H2} type={TextType.SUBHEADER}>
            {weatherData?.current?.temp}
          </Text>
        </Wrapper>
      )}
      <Row>
        {weatherData?.hourly.map(data => (
          <Wrapper key={data.timestamp}>
            <Text as={TextComponent.H2} type={TextType.SUBHEADER}>
              {formatTime(
                new Date(data?.timestamp * 1000),
                weatherData.timezone
              )}
            </Text>
            <Text as={TextComponent.H2} type={TextType.SUBHEADER}>
              {data?.weather.icon}
            </Text>
            <Text as={TextComponent.H2} type={TextType.SUBHEADER}>
              {data?.temp}
            </Text>
          </Wrapper>
        ))}
      </Row>
    </Box>
  );
};
