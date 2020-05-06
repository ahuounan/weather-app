import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { icons } from 'assets';

import { WeatherActions } from 'store/data/weather/actions';
import { useSelector } from 'store/hooks';
import { selectors } from 'store/selectors';

import { Row } from 'view/components/layouts/Row';
import { Stack } from 'view/components/layouts/Stack';
import { Icon } from 'view/components/primitives/Icon';
import { CurrentWeatherDisplay } from 'view/containers/CurrentWeatherDisplay';
import { DataRow } from 'view/containers/DataRow';
import { WeatherHeader } from 'view/containers/WeatherHeader';

export const Weather = () => {
  const dispatch = useDispatch();
  const { lat, lng } = useSelector(selectors.view.weather.getLocation);

  React.useEffect(() => {
    dispatch(WeatherActions.startSubscription());
    return () => {
      dispatch(WeatherActions.stopSubscription());
    };
  }, [lat, lng]);

  return (
    <Stack gap={0} verticalAlignment="space-between">
      <Row gap={0} horizontalAlignment="space-between">
        <WeatherHeader />
        <Stack gap={1} verticalAlignment="center">
          <Link to="/search">
            <Icon alt="Close" src={icons.close} />
          </Link>
          <Link to="/settings">
            <Icon alt="Settings" src={icons.settings} />
          </Link>
        </Stack>
      </Row>
      <CurrentWeatherDisplay />
      <DataRow />
    </Stack>
  );
};
