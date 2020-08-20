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
import ScrollToTop from '../components/ScrollToTop';
import ItrFourPage from '../pages/ItrFourPage';
import ItrFivePage from '../pages/ItrFivePage';
import ItrSixPage from '../pages/ItrSixPage';
import ItrSevenPage from '../pages/ItrSevenPage';
import PfPage from '../pages/PfPage';
import EsiPage from '../pages/EsiPage';
import EsiReturnPage from '../pages/EsiReturnPage';

export class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/gst' component={GstPage} />
            <Route exact path='/gst-return' component={GstreturnPage} />
            <Route exact path='/income-tax-return-1' component={ItrOnePage} />
            <Route exact path='/income-tax-return-2' component={ItrTwoPage} />
            <Route exact path='/income-tax-return-3' component={ItrThreePage} />
            <Route exact path='/income-tax-return-4' component={ItrFourPage} />
            <Route exact path='/income-tax-return-5' component={ItrFivePage} />
            <Route exact path='/income-tax-return-6' component={ItrSixPage} />
            <Route exact path='/income-tax-return-7' component={ItrSevenPage} />
            <Route exact path='/trademark' component={TrademarkPage} />
            <Route exact path='/trademark-renewal' component={TdrenewalPage} />
            <Route exact path='/provident-fund' component={PfPage} />
            <Route
              exact
              path='/employees-state-insurance'
              component={EsiPage}
            />
            <Route
              exact
              path='/employees-state-insurance-return'
              component={EsiReturnPage}
            />
            <Route exact path='*' component={NotfoundPage} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Routes;
