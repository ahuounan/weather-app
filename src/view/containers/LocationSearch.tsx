import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Geocode } from 'models/geocode';

import { GeocodeActions } from 'store/data/geocode/actions';
import { geocodeSelectors } from 'store/data/geocode/selectors';
import { useSelector } from 'store/hooks';
import { searchSelectors } from 'store/view/search/selectors';
import { SearchActions } from 'store/view/search/actions';
import { WeatherViewActions } from 'store/view/weather/actions';

import { Stack } from 'view/components/layouts/Stack';
import { Scroller } from 'view/components/layouts/Scroller';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';
import { Input } from 'view/components/primitives/Input';
import { InputComponent, InputType } from 'view/components/primitives/Input/types';
import { getCurrentSearchResult } from 'store/selectors';

export const LocationSearch = () => {
  const dispatch = useDispatch();

  const query = useSelector(searchSelectors.getQuery);
  const results = useSelector(getCurrentSearchResult);
  const isFetching = useSelector(geocodeSelectors.getFetching);

  React.useEffect(() => {
    dispatch(GeocodeActions.query({ placename: query }));
  }, [query]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SearchActions.updateQuery(e.target.value));
  };

  return (
    <Stack gap={1}>
      <Stack gap={1} flex={1}>
        <Text as={TextComponent.LABEL} type={TextType.SUBHEADER}>
          Enter a location...
        </Text>
        <Input
          onChange={handleInput}
          value={query}
          as={InputComponent.INPUT}
          type={InputType.TEXT}
        />
      </Stack>
      <Scroller scrollY>
        <Stack gap={1}>
          {isFetching ? (
            <Text as={TextComponent.P} type={TextType.BODY}>
              Loading...
            </Text>
          ) : !results?.results && query.length > 0 ? (
            <Text as={TextComponent.P} type={TextType.BODY}>
              No results
            </Text>
          ) : !results?.results ? null : (
            results.results.map(({ lat, lng, id, label }: Geocode) => {
              const handleClick = () => {
                dispatch(WeatherViewActions.setLocation({ lat: lat, lng: lng }));
              };

              return (
                <Link key={id} to={`/weather`} onClick={handleClick}>
                  <Text as={TextComponent.P} type={TextType.BODY}>
                    {label}
                  </Text>
                </Link>
              );
            })
          )}
        </Stack>
      </Scroller>
    </Stack>
  );
};
