import { RootState } from 'store/types';
import { selectors } from 'store/selectors';

export const getCurrentSearchResult = (state: RootState) => {
  const query = selectors.view.query.getQuery(state);
  const getDenormalizedSearchResults = selectors.models.geocode.makeGetDenormalizedSearchResult(
    query
  );
  const searchResults = getDenormalizedSearchResults(state);

  return searchResults;
};
