import React from 'react';
import { render } from '@testing-library/react';

import { Text } from 'view/components/primitives/Text';
import { TextComponent, TextType } from '../types';

test('Renders header', () => {
  const { container } = render(
    <Text as={TextComponent.H1} styles={{ flex: 1 }} type={TextType.HEADER}>
      Header
    </Text>
  );
  // const header = getByText('Header');

  // expect(header).toHaveTextContent('Header');
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    <div>
      <h1
        class="emotion-0"
      >
        Header
      </h1>
    </div>
  `);
});
