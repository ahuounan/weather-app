import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { Stack } from 'view/components/layouts/Stack';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';
import { Input } from 'view/components/primitives/Input';
import { InputComponent, InputType } from 'view/components/primitives/Input/types';
import { GeocodeActions } from 'store/data/geocode/actions';
import { geocodeSelectors } from 'store/data/geocode/selectors';
import { RootState } from 'store/data/types';

export const Search = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = React.useState('');
  React.useEffect(() => {
    if (query.length > 1) {
      dispatch(GeocodeActions.geocodeQuery({ placename: query }));
    }
  }, [query]);
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );

  const results = useSelector((state: RootState) =>
    geocodeSelectors.getGeocodeResults(state, query)
  );
  const isFetching = useSelector(geocodeSelectors.getIsFetching);
  const error = useSelector(geocodeSelectors.getError);

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
        results?.results.map(result => {
          return (
            <Text key={result.id} as={TextComponent.P} type={TextType.BODY}>
              {result.label}
            </Text>
          );
        })
      )}
      <Link to="/weather/london">Weather</Link>
    </Stack>
  );
};
