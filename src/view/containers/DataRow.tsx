import React from 'react';
import { omit, map } from 'lodash';

import { DataSeries } from 'models/settings';
import { WeatherDaily, WeatherHourly } from 'models/weather';

import { weatherSelectors } from 'store/data/weather/selectors';
import { useSelector } from 'store/hooks';
import { settingsSelectors } from 'store/view/settings/selectors';
import { RootState } from 'store/types';

import { formatTime } from 'utils';

import { Row } from 'view/components/layouts/Row';
import { Scroller } from 'view/components/layouts/Scroller';
import { WeatherCard } from 'view/components/patterns/WeatherCard';

const getCurrentLocationDataSeries = (state: RootState) => {
  const dataSeries = settingsSelectors.getCurrentDataSeries(state);
  const dailyWeatherData = weatherSelectors.getDailyWeatherData(state);
  const hourlyWeatherData = weatherSelectors.getHourlyWeatherData(state);

  switch (dataSeries) {
    case DataSeries.DAILY: {
      return dailyWeatherData;
    }
    case DataSeries.HOURLY: {
      return hourlyWeatherData;
    }
    default: {
      return hourlyWeatherData;
    }
  }
};

export const DataRow = () => {
  const dataSeries = useSelector<(Partial<WeatherDaily> | Partial<WeatherHourly>)[]>(
    getCurrentLocationDataSeries
  );
  const timezone = useSelector(weatherSelectors.getTimezone);

  if (!dataSeries) return <div>loading</div>;

  return (
    <Scroller scrollX>
      <Row gap={1}>
        {dataSeries.map(data => {
          const dataPoints = map(omit(data, 'time', 'icon', 'description'), (value, label) => ({
            value: String(value),
            label
          }));

          return (
            <WeatherCard
              key={data.time}
              time={formatTime(new Date(data.time ?? 0), timezone, false)}
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
