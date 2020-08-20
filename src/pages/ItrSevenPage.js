import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_11.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import ItrSevenComponent from '../components/ItrSevenComponent';

class ItrSevenPage extends Component {
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
          head='Income Tax Return - 7'
          para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
          btn='Register now'
          img={model}
          tagline='Get your ITR-7 filing @₹ 4,237 excluding GST'
          services={services}
        />
        <div className='container'>
          <BreadcrumbComponent title='Income Tax Return - 7' />
          <ItrSevenComponent />
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default ItrSevenPage;
