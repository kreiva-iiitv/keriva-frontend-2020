import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Event from './Container/Event/Event';
import Home from './Container/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact
          render={props => (
            <Home />
          )}
        />
        <Route path="/event" exact
          render={props => (
            <Event />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
