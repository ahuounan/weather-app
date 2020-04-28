import { DependencyManager } from 'services/DependencyManager';
import { Painting } from './types';

const get = async () => {
  const { response, data } = await DependencyManager.getInstance().http.get<Painting[]>(
    '/paintings'
  );
  if (response.ok) {
    return data;
  } else {
    throw new Error(response.statusText);
  }
};

export const PaintingsApi = {
  get
};
