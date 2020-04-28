import { createSelector } from 'reselect';
import { RootState } from 'store/types';

import { PaintingsState } from './types';

const getState = (state: RootState): PaintingsState => state.paintings;

const getPaintingById = (state: RootState, id: number) => getState(state).paintings[id];

const getPaintingIds = (state: RootState) => getState(state).paintingsList;

const getPaintingsDenormalized = (state: RootState, ids: number[]) => {
  return ids ? ids.map(id => getPaintingById(state, id)) : [];
};

const makeGetState = () => createSelector([getState], obj => obj);
const makeGetPaintingById = () => createSelector([getPaintingById], obj => obj);
const makeGetPaintingIds = () => createSelector([getPaintingIds], obj => obj);
const makeGetPaintingsDenormalized = () => createSelector([getPaintingsDenormalized], obj => obj);

export const PaintingsSelectors = {
  makeGetState,
  makeGetPaintingById,
  makeGetPaintingIds,
  makeGetPaintingsDenormalized
};
