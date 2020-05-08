import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { icons } from 'assets';

import { WeatherActions } from 'store/models/weather/actions';
import { useSelector } from 'store/hooks';
import { selectors } from 'store/selectors';

import { Row } from 'view/components/layouts/Row';
import { Stack } from 'view/components/layouts/Stack';
import { Icon } from 'view/components/primitives/Icon';
import { CurrentWeatherDisplay } from 'view/containers/weather/CurrentWeatherDisplay';
import { DataRow } from 'view/containers/weather/DataRow';
import { WeatherHeader } from 'view/containers/weather/WeatherHeader';
import { BackgroundPhoto } from 'view/containers/weather/BackgroundPhoto';

export const Weather = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectors.view.weather.getLocation);

  React.useEffect(() => {
    dispatch(WeatherActions.startSubscription({ location }));
    return () => {
      dispatch(WeatherActions.stopSubscription());
    };
  }, [location]);

  return (
    <Stack gap={0} verticalAlignment="space-between">
      <BackgroundPhoto />
      <Row gap={0} horizontalAlignment="space-between">
        <WeatherHeader />
        <Stack gap={1} verticalAlignment="center">
          <Link to="/search">
            <Icon alt="Search" src={icons.search} />
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
