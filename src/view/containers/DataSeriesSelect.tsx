import React from 'react';
import { useDispatch } from 'react-redux';

import { DataSection } from 'models/settings';

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
          key: DataSection.DAILY,
          title: DataSection.DAILY,
          checked: dataSeries === DataSection.DAILY,
          onChange: () => dispatch(SettingsActions.changeDataSeries(DataSection.DAILY))
        },
        {
          key: DataSection.HOURLY,
          title: DataSection.HOURLY,
          checked: dataSeries === DataSection.HOURLY,
          onChange: () => dispatch(SettingsActions.changeDataSeries(DataSection.HOURLY))
        }
      ]}
    />
  );
};
