import React from 'react';
import { omit, map } from 'lodash';

import { useSelector } from 'store/hooks';
import { selectors } from 'store/selectors';
import { DataSection } from 'store/view/settings/types';

import { Row } from 'view/components/layouts/Row';
import { Scroller } from 'view/components/layouts/Scroller';
import { WeatherCard } from 'view/components/patterns/WeatherCard';
import { Loader } from 'view/components/primitives/Loader';

import { formatTime, formatShortDate } from 'utils';

import { getLocationTimezone, getDisplayedLocationDataSeries } from './selectors';
import { FormattedWeatherDaily } from './types';

export const DataSeries = () => {
  const dataSeries: (FormattedWeatherDaily | FormattedWeatherDaily)[] | undefined = useSelector(
    getDisplayedLocationDataSeries
  );
  const timezone = useSelector(getLocationTimezone);
  const dataSeriesType = useSelector(selectors.view.settings.getCurrentDataSeries);
  const timeFormatter = dataSeriesType === DataSection.HOURLY ? formatTime : formatShortDate;

  if (!dataSeries) return <Loader />;

  return (
    <Scroller scrollX styles={{ background: 'rgba(0, 0, 0, 0.85)' }}>
      <Row gap={1} padding={1}>
        {dataSeries?.map(data => {
          const dataPoints = map(omit(data, 'time', 'icon', 'description'), (value, label) => ({
            value: String(value),
            label
          }));

          return (
            <WeatherCard
              key={data.time}
              time={timeFormatter(new Date(data.time ?? 0), timezone, false)}
              icon={{
                src: `http://openweathermap.org/img/w/${data.icon}.png`,
                alt: data.description
              }}
              data={dataPoints}
            />
          );
        })}
      </Row>
    </Scroller>
  );
};
