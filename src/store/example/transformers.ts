import { Dictionary } from 'types';
import { Painting, PaintingRaw } from './types';

const paintings = (paintings: PaintingRaw[]) => {
  const paintingsDict: Dictionary<Painting> = {};
  const paintingsList: number[] = [];
  paintings.forEach(painting => {
    const { id } = painting;
    paintingsList.push(id);
    paintingsDict[id] = {
      name: painting.name_en,
      medium: painting.medium_en,
      dimensions: painting.dimensions,
      year: painting.year,
      collection: painting.collection,
      collectionName: painting.collection_name,
      srcT: painting.src_t,
      srcL: painting.src_l,
      srcM: painting.src_m,
      srcH: painting.src_h,
      id
    };
    return;
  });
  return { paintingsDict, paintingsList };
};

export const PaintingsTransformers = {
  paintings
};
