import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import BannerComponent from '../components/BannerComponent';
import FooterComponent from '../components/FooterComponent';
import trademarkRenewal from '../assets/trademark-renewal.svg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import TdrenewalComponent from '../components/TdrenewalComponent';

class ItrThreePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <BannerComponent
          head='Trademark Renewal'
          para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
          btn='Register now'
          img={trademarkRenewal}
        />
        <div className='container'>
          <BreadcrumbComponent title='Trademark Renewal' />
          <TdrenewalComponent />
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default ItrThreePage;
