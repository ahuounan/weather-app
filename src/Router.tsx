import React from 'react';
import {} from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </BrowserRouter>
  );
};
