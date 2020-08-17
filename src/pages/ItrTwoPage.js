import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import BannerComponent from '../components/BannerComponent';
import FooterComponent from '../components/FooterComponent';
import itrTwo from '../assets/itrTwo.svg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ItrTwoComponent from '../components/ItrTwoComponent';

class ItrTwoPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <BannerComponent
          head='Income Tax Return - 2'
          para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
          btn='Register now'
          img={itrTwo}
        />
        <div className='container'>
          <BreadcrumbComponent title='Income Tax Return - 2' />
          <ItrTwoComponent />
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default ItrTwoPage;
