import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Geocode } from 'models/geocode';

import { GeocodeActions } from 'store/models/geocode/actions';
import { useSelector } from 'store/hooks';
import { SearchActions } from 'store/view/search/actions';
import { WeatherViewActions } from 'store/view/weather/actions';
import { selectors } from 'store/selectors';

import { Stack } from 'view/components/layouts/Stack';
import { Scroller } from 'view/components/layouts/Scroller';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';
import { Input } from 'view/components/primitives/Input';
import { InputComponent, InputType } from 'view/components/primitives/Input/types';

export const LocationSearch = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectors.view.search.getQuery);
  const results = useSelector(selectors.getCurrentSearchResult);
  const isFetching = useSelector(selectors.models.geocode.getFetching);

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
          ) : !results && query.length > 0 ? (
            <Text as={TextComponent.P} type={TextType.BODY}>
              No results
            </Text>
          ) : !results ? null : (
            results.map(({ lat, lng, id, label }: Geocode) => {
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
