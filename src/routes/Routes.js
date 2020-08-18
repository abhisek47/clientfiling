import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotfoundPage from '../pages/NotfoundPage';
import GstPage from '../pages/GstPage';
import GstreturnPage from '../pages/GstreturnPage';
import ItrOnePage from '../pages/ItrOnePage';
import ItrTwoPage from '../pages/ItrTwoPage';
import ItrThreePage from '../pages/ItrThreePage';
import TrademarkPage from '../pages/TrademarkPage';
import TdrenewalPage from '../pages/TdrenewalPage';

export class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/gst' component={GstPage} />
            <Route exact path='/gst-return' component={GstreturnPage} />
            <Route exact path='/income-tax-return-1' component={ItrOnePage} />
            <Route exact path='/income-tax-return-2' component={ItrTwoPage} />
            <Route exact path='/income-tax-return-3' component={ItrThreePage} />
            <Route exact path='/trademark' component={TrademarkPage} />
            <Route exact path='/trademark-renewal' component={TdrenewalPage} />
            <Route exact path='*' component={NotfoundPage} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Routes;
