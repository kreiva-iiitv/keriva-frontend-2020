import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Event from './Container/Event';
import Home from './Container/Home';
import Members from './Container/Members/Members'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Event} />
        <Route exact path="/members" component={Members} />
        <Route exact path="#" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
