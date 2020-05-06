import React from 'react';
import { useDispatch } from 'react-redux';

import { DataSeries } from 'models/settings';

import { useSelector } from 'store/hooks';
import { SettingsActions } from 'store/view/settings/actions';
import { settingsSelectors } from 'store/view/settings/selectors';

import { InputRadio } from 'view/components/patterns/InputRadio';

export const DataSeriesSelect = () => {
  const dispatch = useDispatch();
  const dataSeries = useSelector(settingsSelectors.getCurrentDataSeries);

  return (
    <InputRadio
      title="DataSeries"
      options={[
        {
          key: DataSeries.DAILY,
          title: DataSeries.DAILY,
          checked: dataSeries === DataSeries.DAILY,
          onChange: () => dispatch(SettingsActions.changeDataSeries(DataSeries.DAILY))
        },
        {
          key: DataSeries.HOURLY,
          title: DataSeries.HOURLY,
          checked: dataSeries === DataSeries.HOURLY,
          onChange: () => dispatch(SettingsActions.changeDataSeries(DataSeries.HOURLY))
        }
      ]}
    />
  );
};
