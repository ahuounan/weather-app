import React from 'react';
import { Row } from '../Row';
import { buildStyles } from './styles';

interface Props {
  children: React.ReactNode;
}

export const Wrapper = (props: Props) => {
  const { children } = props;
  const styles = buildStyles();

  return <Row css={styles.wrapper}>{children}</Row>;
};
