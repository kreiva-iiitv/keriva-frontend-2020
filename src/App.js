import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Event from './Container/Event';
import Home from './Container/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Home} />
        <Route exact path="/members" component={Home} />
        <Route exact path="#" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
