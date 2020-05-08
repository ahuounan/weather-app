import React from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from 'store/hooks';
import { selectors } from 'store/selectors';
import { SettingsActions } from 'store/view/settings/actions';
import { DataSection } from 'store/view/settings/types';

import { Grid } from 'view/components/layouts/Grid';
import { Stack } from 'view/components/layouts/Stack';
import { InputBoolean } from 'view/components/patterns/InputBoolean';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';

interface Props {
  section: DataSection;
}

export const StatsSelect = (props: Props) => {
  const { section } = props;
  const dispatch = useDispatch();
  const getSettings = selectors.view.settings.makeGetDataSeriesSettings(section);
  const settings = useSelector(getSettings);

  return (
    <Stack gap={1}>
      <Text as={TextComponent.P} type={TextType.BODY}>
        {section}
      </Text>
      <Stack gap={1}>
        <Grid>
          {settings &&
            Object.keys(settings).map(dataPoint => {
              const checked = settings[dataPoint];
              const handleChange = () => {
                switch (section) {
                  case DataSection.CURRENT: {
                    dispatch(SettingsActions.toggleDataPoint({ section, dataPoint }));
                    return;
                  }
                  case DataSection.HOURLY: {
                    dispatch(SettingsActions.toggleDataPoint({ section, dataPoint }));
                    return;
                  }
                  case DataSection.DAILY: {
                    dispatch(SettingsActions.toggleDataPoint({ section, dataPoint }));
                    return;
                  }
                }
              };

              return (
                <InputBoolean
                  key={dataPoint}
                  label={dataPoint}
                  onChange={handleChange}
                  checked={checked}
                />
              );
            })}
        </Grid>
      </Stack>
    </Stack>
  );
};
