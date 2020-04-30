import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Search } from './pages/Search';
import { Weather } from './pages/Weather';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/search" />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/weather/:location">
        <Weather />
      </Route>
    </Switch>
  );
};
