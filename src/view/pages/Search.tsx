import React from 'react';

import { Centered } from 'view/components/layouts/Centered';
import { Stack } from 'view/components/layouts/Stack';

import { SearchBar } from 'view/containers/search/SearchBar';
import { SearchResults } from 'view/containers/search/SearchResults';
import { Floater } from 'view/components/layouts/Floater';

export const Search = () => {
  return (
    <Centered>
      <Stack gap={1}>
        <SearchBar />
        <Floater top="100%">
          <SearchResults />
        </Floater>
      </Stack>
    </Centered>
  );
};
