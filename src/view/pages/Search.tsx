import React from 'react';

import { Centered } from 'view/components/layouts/Centered';
import { LocationSearch } from 'view/containers/search/LocationSearch';

export const Search = () => {
  return (
    <Centered>
      <LocationSearch />
    </Centered>
  );
};
