import React from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact
        render={props => (
          <Home />
        )}
      />
      <Route path="/about" exact
        render={props => (
          <About />
        )}
      />
    </Switch>
  );
}

export default App;
