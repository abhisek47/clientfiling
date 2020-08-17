import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import BannerComponent from '../components/BannerComponent';
import FooterComponent from '../components/FooterComponent';
import trademark from '../assets/trademark.svg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import TrademarkComponent from '../components/TrademarkComponent';

class ItrThreePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <BannerComponent
          head='Trademark Registration'
          para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
          btn='Register now'
          img={trademark}
        />
        <div className='container'>
          <BreadcrumbComponent title='Trademark' />
          <TrademarkComponent />
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default ItrThreePage;
