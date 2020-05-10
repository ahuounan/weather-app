import React from 'react';
import { CSSObject } from '@emotion/core';

import { useSelector } from 'store/hooks';

import { Box } from 'view/components/layouts/Box';
import { ProgressiveImage } from 'view/components/primitives/ProgressiveImage';

import { getLocationBackgroundPhotoUrls } from './selectors';

const styles: Record<string, CSSObject> = {
  img: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  }
};

export const BackgroundPhoto = () => {
  const urls = useSelector(getLocationBackgroundPhotoUrls);
  const [loaded, setLoaded] = React.useState(false);

  if (!urls) {
    return null;
  }

  return (
    <Box
      styles={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }}
    >
      <ProgressiveImage
        styles={[styles.img, loaded && { opacity: 0.8 }]}
        onLoad={() => setLoaded(true)}
        srcProgression={urls}
        alt="Background"
      />
    </Box>
  );
};
