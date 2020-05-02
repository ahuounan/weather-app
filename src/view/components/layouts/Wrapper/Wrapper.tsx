import React from 'react';
import { Row } from '../Row';
import { buildStyles } from './styles';
import { CSSObjects } from 'types/styles';

interface Props {
  children: React.ReactNode;
  styles?: CSSObjects;
}

export const Wrapper = (props: Props) => {
  const { children, styles } = props;
  const defaultStyles = buildStyles();

  return <Row styles={[defaultStyles.wrapper, styles]}>{children}</Row>;
};
