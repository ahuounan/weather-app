import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Box = (props: Props) => {
  const { children } = props;

  return <div>{children}</div>;
};
