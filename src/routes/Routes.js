import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotfoundPage from '../pages/NotfoundPage';

export class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='*' component={NotfoundPage} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Routes;
