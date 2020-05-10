import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { icons } from 'assets';

import { Row } from 'view/components/layouts/Row';
import { Stack } from 'view/components/layouts/Stack';
import { Icon } from 'view/components/primitives/Icon';
import { CurrentWeather } from 'view/containers/weather/CurrentWeather';
import { DataSeries } from 'view/containers/weather/DataSeries';
import { LocationDate } from 'view/containers/weather/LocationDate';
import { BackgroundPhoto } from 'view/containers/weather/BackgroundPhoto';
import { LocationActions } from 'store/view/location/actions';

export const Weather = () => {
  const { lat, lng } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(LocationActions.set({ location: { lat: Number(lat), lng: Number(lng) } }));
  }, [lat, lng]);

  return (
    <Stack gap={0} verticalAlignment="space-between">
      <BackgroundPhoto />
      <Row
        gap={0}
        horizontalAlignment="space-between"
        styles={{ background: 'rgba(0, 0, 0, 0.85)' }}
      >
        <LocationDate />
        <Stack gap={1} verticalAlignment="center" padding={1}>
          <Link to="/search">
            <Icon alt="Search" src={icons.search} />
          </Link>
          <Link to="/settings">
            <Icon alt="Settings" src={icons.settings} />
          </Link>
        </Stack>
      </Row>
      <CurrentWeather />
      <DataSeries />
    </Stack>
  );
};
