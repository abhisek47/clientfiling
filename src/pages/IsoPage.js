import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_21.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import IsoComponent from '../components/IsoComponent';

class IsoPage extends Component {
  render() {
    const services = [
      'Filing of Application for ISO Registration',
      'Required Timing - 9 days',
      'Completely Online – No need to visit office',
      'CA Assisted GST Filing for all your GST needs',
    ];
    return (
      <React.Fragment>
        <HeaderComponent />
        <ServiceBannerComponent
          head='ISO Registration'
          para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
          btn='Register now'
          img={model}
          tagline='Get your ISO registered @₹ 6,000 excluding GST'
          services={services}
        />
        <div className='container'>
          <BreadcrumbComponent title='International Organization for Standardization' />
          <IsoComponent />
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default IsoPage;
