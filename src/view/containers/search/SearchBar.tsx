import React from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from 'store/hooks';
import { QueryActions } from 'store/view/query/actions';
import { selectors } from 'store/selectors';

import { Stack } from 'view/components/layouts/Stack';
import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from 'view/components/primitives/Text/types';
import { Input } from 'view/components/primitives/Input';
import { InputComponent, InputType } from 'view/components/primitives/Input/types';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectors.view.query.getQuery);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(QueryActions.update({ query: e.target.value }));
  };

  return (
    <Stack gap={1} flex={1}>
      <Text as={TextComponent.LABEL} type={TextType.SUBHEADER}>
        Enter a location...
      </Text>
      <Input onChange={handleInput} value={query} as={InputComponent.INPUT} type={InputType.TEXT} />
    </Stack>
  );
};
