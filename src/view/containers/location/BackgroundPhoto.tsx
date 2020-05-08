import React from 'react';
import { CSSObject } from '@emotion/core';

import { useSelector } from 'store/hooks';

import { Box } from 'view/components/layouts/Box';

import { getLocationBackgroundPhotoUrls } from './selectors';

const styles: Record<string, CSSObject> = {
  img: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    opacity: 0
  }
};

export const BackgroundPhoto = () => {
  const urls = useSelector(getLocationBackgroundPhotoUrls);
  const [loaded, setLoaded] = React.useState(false);

  if (!urls) {
    return null;
  }
  const [url1] = urls;

  return (
    <Box
      styles={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'rgba(0, 0, 0, 0.25)'
      }}
    >
      <img
        css={[styles.img, loaded && { opacity: 0.8 }]}
        onLoad={() => setLoaded(true)}
        src={url1}
        alt="Background 1"
      />
    </Box>
  );
};
