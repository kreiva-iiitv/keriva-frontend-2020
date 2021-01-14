import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TimelineIndex from './Container/Event/TimelineIndex';
import Event from './Container/Event/EventIndex';
import Home from './Container/Home';
import Members from './Container/Members/Members'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Event} />
        <Route exact path="/members" component={Members} />
        <Route exact path="/timeline" component={TimelineIndex} />
        <Route exact path="/members" component={Home} />
        <Route exact path="#" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
