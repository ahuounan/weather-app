import React from 'react';
import { keyframes } from '@emotion/core';

interface Props {
  height?: string;
  width?: string;
}

const spin = keyframes`
  100% {
    transform:rotate(360deg);
  }
`;

export const Loader = (props: Props) => {
  const { height, width } = props;
  return (
    <div
      css={{
        height: `${height ? height : '52px'}`,
        width: `${width ? width : '52px'}`,
        borderLeft: '4px solid black',
        borderBottom: '4px solid black',
        borderRight: '4px solid black',
        borderRadius: '50%',
        transformOrigin: 'center',
        animation: `${spin} 1s ease-in-out infinite`
      }}
    />
  );
};
