import React from 'react';

import { Routes } from 'view/Routes';
import { BrowserRouter } from 'react-router-dom';

export const App = () => (
  <BrowserRouter>
    <div>weather app</div>
    <Routes />
  </BrowserRouter>
);
