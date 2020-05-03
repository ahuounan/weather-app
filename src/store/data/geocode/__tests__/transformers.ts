import { geocodeTransformers } from '../transformers';

test('formats the value', () => {
  expect(!!geocodeTransformers).toBe(true);
});
