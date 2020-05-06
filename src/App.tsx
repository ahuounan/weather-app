import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'store';

import { Routes } from 'view/Routes';
import { ThemeContext } from 'view/theme/context';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeContext.Provider>
          <Routes />
        </ThemeContext.Provider>
      </BrowserRouter>
    </Provider>
  );
};
