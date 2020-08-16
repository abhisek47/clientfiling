import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotfoundPage from '../pages/NotfoundPage';
import GstPage from '../pages/GstPage';
import GstreturnPage from '../pages/GstreturnPage';

export class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/gst' component={GstPage} />
            <Route exact path='/gst-return' component={GstreturnPage} />
            <Route exact path='*' component={NotfoundPage} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Routes;
