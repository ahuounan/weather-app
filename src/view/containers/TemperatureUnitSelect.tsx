import React from 'react';
import { useDispatch } from 'react-redux';

import { TemperatureUnit } from 'models/settings';

import { useSelector } from 'store/hooks';
import { SettingsActions } from 'store/view/settings/actions';
import { selectors } from 'store/selectors';

import { InputRadio } from 'view/components/patterns/InputRadio';

export const TemperatureUnitSelect = () => {
  const dispatch = useDispatch();

  const temperatureUnit = useSelector(selectors.view.settings.getTemperatureUnit);

  return (
    <InputRadio
      title="Temperature Unit"
      options={[
        {
          key: TemperatureUnit.CELSIUS,
          title: TemperatureUnit.CELSIUS,
          checked: temperatureUnit === TemperatureUnit.CELSIUS,
          onChange: () => dispatch(SettingsActions.settingsChangeUnit(TemperatureUnit.CELSIUS))
        },
        {
          key: TemperatureUnit.KELVIN,
          title: TemperatureUnit.KELVIN,
          checked: temperatureUnit === TemperatureUnit.KELVIN,
          onChange: () => dispatch(SettingsActions.settingsChangeUnit(TemperatureUnit.KELVIN))
        },
        {
          key: TemperatureUnit.FAHRENHEIT,
          title: TemperatureUnit.FAHRENHEIT,
          checked: temperatureUnit === TemperatureUnit.FAHRENHEIT,
          onChange: () => dispatch(SettingsActions.settingsChangeUnit(TemperatureUnit.FAHRENHEIT))
        }
      ]}
    />
  );
};
