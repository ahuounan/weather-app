import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PaintingsSelectors } from './selectors';
import { RootState } from 'store/types';
import { PaintingsActions } from './actions';

export const useFetchPaintings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PaintingsActions.fetchPaintingsRequest());
  }, []);
};

export const usePaintings = () => {
  const getPaintingsIds = useMemo(PaintingsSelectors.makeGetPaintingIds, []);
  const paintings = useSelector((state: RootState) => getPaintingsIds(state));
  return paintings;
};

export const usePaintingById = (id: number) => {
  const getPaintingById = useMemo(PaintingsSelectors.makeGetPaintingById, []);
  const painting = useSelector((state: RootState) => getPaintingById(state, id));
  return painting;
};

export const usePaintingsDenormalized = (ids: number[]) => {
  const getPaintingsDenormalized = useMemo(PaintingsSelectors.makeGetPaintingsDenormalized, []);
  const paintings = useSelector((state: RootState) => getPaintingsDenormalized(state, ids));
  return paintings;
};
