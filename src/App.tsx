import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from 'view/Routes';
import { ThemeContext } from 'view/theme/context';
import { store } from 'store';

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeContext.Provider>
        <Routes />
      </ThemeContext.Provider>
    </BrowserRouter>
  </Provider>
);
