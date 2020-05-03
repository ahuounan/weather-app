import React from 'react';
import { theme } from './theme';

const Context = React.createContext(theme);

interface Props {
  children?: React.ReactNode;
}

const Provider = (props: Props) => {
  const { children } = props;
  return <Context.Provider value={theme}>{children}</Context.Provider>;
};

export const ThemeContext = {
  Context,
  Provider,
  Consumer: Context.Consumer
};
