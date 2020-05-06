import React from 'react';
import { omit, map } from 'lodash';

import { useSelector } from 'store/hooks';
import { selectors } from 'store/selectors';

import { formatTime } from 'utils';

import { Row } from 'view/components/layouts/Row';
import { Scroller } from 'view/components/layouts/Scroller';
import { WeatherCard } from 'view/components/patterns/WeatherCard';
import { WeatherHourly, WeatherDaily } from 'models/weather';

export const DataRow = () => {
  const dataSeries: (Partial<WeatherDaily> | Partial<WeatherHourly>)[] | null = useSelector(
    selectors.displayed.getDataSeries
  );
  const timezone = useSelector(selectors.location.getTimezone);

  if (!dataSeries) return <div>loading</div>;

  return (
    <Scroller scrollX>
      <Row gap={1}>
        {dataSeries?.map(data => {
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
