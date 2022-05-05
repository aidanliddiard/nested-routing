import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from './views/List';
import Detail from './views/Detail';
import Home from './views/Home';

export default function App() {
  return (
    <Switch>
      <Route path="/characters/:id">
        <Detail />
      </Route>
      <Route path="/characters">
        <List />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
