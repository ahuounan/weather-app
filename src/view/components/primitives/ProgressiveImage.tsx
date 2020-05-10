import React from 'react';

import { CSSObjects } from 'types/styles';

import { Loader } from './Loader';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  srcProgression: string[];
  children?: React.ReactNode;
  styles?: CSSObjects;
}

export const ProgressiveImage = (props: Props) => {
  const { children, srcProgression, styles, ...imgProps } = props;
  const [srcIndex, setSrcIndex] = React.useState(0);
  const [showLoader, setShowLoader] = React.useState(true);
  const handleLoad = () => {
    if (srcIndex === 0) setShowLoader(false);
    if (srcIndex >= srcProgression.length - 1) return;
    setSrcIndex(srcIndex + 1);
  };

  return (
    <div css={[{ position: 'relative', display: 'flex' }, styles]}>
      {showLoader && <Loader />}
      <img
        {...imgProps}
        src={srcProgression[srcIndex]}
        onLoad={handleLoad}
        css={[
          {
            filter: `blur(${srcProgression.length - 1 - srcIndex}px)`,
            width: '100%',
            height: 'auto',
            objectFit: 'cover'
          }
        ]}
      />
      {children}
    </div>
  );
};
