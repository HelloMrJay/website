import React from 'react';
import Home from '../pages/home/index';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const RouterFC: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Redirect from="/" to="/home" exact />
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterFC;
