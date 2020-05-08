import React from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from 'store/hooks';
import { selectors } from 'store/selectors';
import { SettingsActions } from 'store/view/settings/actions';
import { DataSection } from 'store/view/settings/types';

import { InputRadio } from 'view/components/patterns/InputRadio';

export const DataSeriesSelect = () => {
  const dispatch = useDispatch();
  const dataSeries = useSelector(selectors.view.settings.getCurrentDataSeries);

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
