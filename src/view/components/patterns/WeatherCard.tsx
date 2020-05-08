import React from 'react';

import { Stack } from 'view/components/layouts/Stack';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';
import { Icon } from 'view/components/primitives/Icon';
import { Row } from 'view/components/layouts/Row';

interface Props {
  time?: string;
  icon: {
    src?: string;
    alt?: string;
  };
  data?: DataPointDisplay[];
}

export interface DataPointDisplay {
  label?: string;
  value?: string;
}

export const WeatherCard = (props: Props) => {
  const { time, icon, data } = props;

  return (
    <Stack gap={1} padding={2}>
      <Text as={TextComponent.H2} type={TextType.SUBHEADER} styles={{ whiteSpace: 'nowrap' }}>
        {time ?? 'Loading...'}
      </Text>
      {icon.src && icon.alt && <Icon alt={icon.alt} src={icon.src} />}
      {data ? (
        data.map(({ label, value }) => {
          return (
            <Row gap={1} key={label}>
              <Text as={TextComponent.P} type={TextType.BODY}>
                {label ?? 'Loading...'}
              </Text>
              <Text as={TextComponent.P} type={TextType.BODY}>
                {value ?? 'Loading...'}
              </Text>
            </Row>
          );
        })
      ) : (
        <Text as={TextComponent.H2} type={TextType.SUBHEADER} styles={{ whiteSpace: 'nowrap' }}>
          Loading...
        </Text>
      )}
    </Stack>
  );
};
