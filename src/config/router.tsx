import React from 'react';
import Home from '../pages/home/index';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const RouterFC: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/* <Redirect from="/" to="/home" exact /> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterFC;
