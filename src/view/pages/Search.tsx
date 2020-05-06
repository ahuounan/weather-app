import React from 'react';

import { Stack } from 'view/components/layouts/Stack';
import { Centered } from 'view/components/layouts/Centered';
import { LocationSearch } from 'view/containers/LocationSearch';

export const Search = () => {
  return (
    <Centered>
      <Stack gap={2} horizontalAlignment="center">
        <LocationSearch />
      </Stack>
    </Centered>
  );
};
