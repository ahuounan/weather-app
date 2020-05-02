import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Stack } from 'view/components/layouts/Stack';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';
import { Input } from 'view/components/primitives/Input';
import {
  InputComponent,
  InputType
} from 'view/components/primitives/Input/types';
import { GeocodeActions } from 'store/data/geocode/actions';
import { geocodeSelectors } from 'store/data/geocode/selectors';
import { RootState } from 'store/types';
import { useSelector } from 'store/hooks';
import { GeocodeResult } from 'store/data/geocode/types';

export const Search = () => {
  const [query, setQuery] = React.useState('');
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (query.length > 1) {
      dispatch(GeocodeActions.geocodeQuery({ placename: query }));
    }
  }, [query]);

  const results = useSelector(
    (state: RootState) =>
      geocodeSelectors.getDenormalizedSearchResultByQuery(state, query),
    (left, right) => left.placename === right.placename
  );
  const isFetching = useSelector(geocodeSelectors.getIsFetching);

  return (
    <Stack>
      <Text as={TextComponent.H1} type={TextType.HEADER}>
        Search
      </Text>
      <Text as={TextComponent.LABEL} type={TextType.BODY}>
        Enter a location...
      </Text>
      <Input
        onChange={handleChange}
        value={query}
        as={InputComponent.INPUT}
        type={InputType.TEXT}
      />
      {isFetching ? (
        <Text as={TextComponent.P} type={TextType.BODY}>
          Loading...
        </Text>
      ) : (
        results?.results?.map((result: GeocodeResult) => {
          return (
            <Link key={result.id} to={`/weather/${result.id}`}>
              <Text as={TextComponent.P} type={TextType.BODY}>
                {result.label}
              </Text>
            </Link>
          );
        })
      )}
    </Stack>
  );
};
