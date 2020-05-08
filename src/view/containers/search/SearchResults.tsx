import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Geocode } from 'models/geocode';

import { useSelector } from 'store/hooks';
import { QueryActions } from 'store/view/query/actions';
import { selectors } from 'store/selectors';

import { Stack } from 'view/components/layouts/Stack';
import { Scroller } from 'view/components/layouts/Scroller';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';

import { getCurrentSearchResult } from './selectors';

export const SearchResults = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectors.view.query.getQuery);
  const isFetching = useSelector(selectors.models.geocode.getFetching);
  const results = useSelector(getCurrentSearchResult);

  return (
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
          results.map(({ location: { lat, lng }, id, label }: Geocode) => {
            const handleClick = () => {
              dispatch(QueryActions.update({ query: '' }));
            };

            return (
              <Link key={id} to={`/weather/${lat}/${lng}`} onClick={handleClick}>
                <Text as={TextComponent.P} type={TextType.BODY}>
                  {label}
                </Text>
              </Link>
            );
          })
        )}
      </Stack>
    </Scroller>
  );
};
