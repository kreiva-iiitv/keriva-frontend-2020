import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from "react-router-dom";
import Event from './Container/Event/Event';
import Gallery from './Container/Gallery/Gallery';
import Home from './Container/Home/Home';

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
      </Switch>
    </BrowserRouter>
    );
  };
}
export default App;
