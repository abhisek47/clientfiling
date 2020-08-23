import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
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
import PrivatePage from '../pages/PrivatePage';
import LlpPage from '../pages/LlpPage';
import PrivateCompliancesPage from '../pages/PrivateCompliancesPage';
import LlpCompliancesPage from '../pages/LlpCompliancesPage';
import ImportExportPage from '../pages/ImportExportPage';
import IsoPage from '../pages/IsoPage';
import { LoginContext } from '../App';
import GstUserForm from '../components/GstUserForm';
import GstReturnUserForm from '../components/GstReturnUserForm';

const Routes = () => {
  const [login, setLogin] = useContext(LoginContext);
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
          <Route exact path='/employees-state-insurance' component={EsiPage} />
          <Route
            exact
            path='/employees-state-insurance-return'
            component={EsiReturnPage}
          />
          <Route
            exact
            path='/private-limited-company'
            component={PrivatePage}
          />
          <Route
            exact
            path='/limited-liability-partnership'
            component={LlpPage}
          />
          <Route
            exact
            path='/private-company-compliances'
            component={PrivateCompliancesPage}
          />
          <Route
            exact
            path='/limited-partnership-compliances'
            component={LlpCompliancesPage}
          />
          <Route
            exact
            path='/import-export-code'
            component={ImportExportPage}
          />
          <Route exact path='/iso' component={IsoPage} />
          <Route exact path='/gst-application-form'>
            {login ? <GstUserForm /> : <Redirect to='/' />}
          </Route>
          <Route exact path='/gst-return-application-form'>
            {login ? <GstReturnUserForm /> : <Redirect to='/' />}
          </Route>
          <Route exact path='*' component={NotfoundPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default Routes;
