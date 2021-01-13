import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from "react-router-dom";
import Event from './Container/Event/Event';
import Home from './Container/Home';
import Members from './Container/Members/Members'

class App extends React.Component{

  state = {

  };
  
  render(){
    return(
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
          <Route path="/members"
            render={props =>(
              <Members/>
              )}
          />
      </Switch>
    </BrowserRouter>
    );
  };
}
export default App;
