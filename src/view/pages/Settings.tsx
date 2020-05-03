import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useSelector } from 'store/hooks';
import { SettingsActions } from 'store/settings/actions';
import { settingsSelectors } from 'store/settings/selectors';
import { TemperatureUnit, DataSeriesType, DataPoint } from 'store/settings/types';
import { InputComponent, InputType } from 'view/components/primitives/Input/types';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';
import { Grid } from 'view/components/layouts/Grid';
import { Row } from 'view/components/layouts/Row';
import { Stack } from 'view/components/layouts/Stack';
import { InputBoolean } from 'view/components/patterns/InputBoolean';
import { InputRadio } from 'view/components/patterns/InputRadio';
import { Input } from 'view/components/primitives/Input';
import { Text } from 'view/components/primitives/Text';

export const Settings = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const settings = useSelector(settingsSelectors.getSettings);

  return (
    <Stack gap={1}>
      <Text as={TextComponent.H1} type={TextType.HEADER}>
        Settings
      </Text>
      <Input as={InputComponent.BUTTON} type={InputType.BUTTON} onClick={() => history.goBack()}>
        <Text as={TextComponent.P} type={TextType.BODY}>
          Back
        </Text>
      </Input>
      <Stack gap={1}>
        <Row gap={1}>
          <InputRadio
            title="Temperature Unit"
            options={[
              {
                key: TemperatureUnit.CELSIUS,
                title: TemperatureUnit.CELSIUS,
                checked: settings.temperatureUnit === TemperatureUnit.CELSIUS,
                onChange: () =>
                  dispatch(SettingsActions.settingsChangeUnit(TemperatureUnit.CELSIUS))
              },
              {
                key: TemperatureUnit.KELVIN,
                title: TemperatureUnit.KELVIN,
                checked: settings.temperatureUnit === TemperatureUnit.KELVIN,
                onChange: () => dispatch(SettingsActions.settingsChangeUnit(TemperatureUnit.KELVIN))
              },
              {
                key: TemperatureUnit.FAHRENHEIT,
                title: TemperatureUnit.FAHRENHEIT,
                checked: settings.temperatureUnit === TemperatureUnit.FAHRENHEIT,
                onChange: () =>
                  dispatch(SettingsActions.settingsChangeUnit(TemperatureUnit.FAHRENHEIT))
              }
            ]}
          />
          <InputRadio
            title="DataSeries"
            options={[
              {
                key: DataSeriesType.DAYS,
                title: DataSeriesType.DAYS,
                checked: settings.dataSeries === DataSeriesType.DAYS,
                onChange: () => dispatch(SettingsActions.changeDataSeries(DataSeriesType.DAYS))
              },
              {
                key: DataSeriesType.HOURS,
                title: DataSeriesType.HOURS,
                checked: settings.dataSeries === DataSeriesType.HOURS,
                onChange: () => dispatch(SettingsActions.changeDataSeries(DataSeriesType.HOURS))
              }
            ]}
          />
        </Row>
        <Row gap={1}>
          <Text as={TextComponent.P} type={TextType.BODY}>
            Data Points
          </Text>
          <Grid>
            {Object.entries(settings.dataPoints).map(([dataPoint, value]) => (
              <InputBoolean
                key={dataPoint}
                label={dataPoint}
                onChange={() => dispatch(SettingsActions.toggleDataPoint(dataPoint as DataPoint))}
                checked={value}
              />
            ))}
          </Grid>
        </Row>
      </Stack>
    </Stack>
  );
};
