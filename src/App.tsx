import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'Router';
import { DependencyManager } from 'services/DependencyManager';
import { Provider } from 'react-redux';
import { store } from 'store/config';

export class App {
  constructor() {
    DependencyManager.initialize();
  }

  run() {
    ReactDOM.render(
      <Provider store={store}>
        <Router />
      </Provider>,
      document.getElementById('root')
    );
  }
}
