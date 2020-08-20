import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_10.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import ItrSixComponent from '../components/ItrSixComponent';

class ItrSixPage extends Component {
  render() {
    const services = [
      'Income tax return filing for persons having capital gains.',
      'Required Timing - 2 days',
      'Completely Online – No need to visit office',
    ];
    return (
      <React.Fragment>
        <HeaderComponent />
        <ServiceBannerComponent
          head='Income Tax Return - 6'
          para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
          btn='Register now'
          img={model}
          tagline='Get your ITR-6 filing @₹ 4,237 excluding GST'
          services={services}
        />
        <div className='container'>
          <BreadcrumbComponent title='Income Tax Return - 6' />
          <ItrSixComponent />
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default ItrSixPage;
