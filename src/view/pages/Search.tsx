import React from 'react';

import { Centered } from 'view/components/layouts/Centered';
import { Stack } from 'view/components/layouts/Stack';

import { SearchBar } from 'view/containers/search/SearchBar';
import { SearchResults } from 'view/containers/search/SearchResults';

export const Search = () => {
  return (
    <Centered>
      <Stack gap={1}>
        <SearchBar />
        <SearchResults />
      </Stack>
    </Centered>
  );
};
