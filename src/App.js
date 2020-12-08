import React from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Event from './components/Event/Event';
import Home from './components/Home/Home';

class App extends React.Component{

  state = {

  };
  
  render(){
    return(
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
    );
  };
}
export default App;
