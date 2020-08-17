import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import BannerComponent from '../components/BannerComponent';
import FooterComponent from '../components/FooterComponent';
import itrThree from '../assets/itrThree.svg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ItrThreeComponent from '../components/ItrThreeComponent';

class ItrThreePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <BannerComponent
          head='Income Tax Return - 3'
          para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
          btn='Register now'
          img={itrThree}
        />
        <div className='container'>
          <BreadcrumbComponent title='Income Tax Return - 3' />
          <ItrThreeComponent />
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default ItrThreePage;
