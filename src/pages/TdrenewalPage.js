import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_7.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import TdrenewalComponent from '../components/TdrenewalComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

class ItrThreePage extends Component {
  render() {
    const services = [
      'Trademark filing under one class for proprietorship and small enterprises. Inclusive of government fee and taxes.',
      'Required Timing - 10 days',
      'CA Assisted GST Filing for all your GST needs',
    ];
    return (
      <React.Fragment>
        <HeaderComponent />
        <ServiceBannerComponent
          head='Trademark Renewal'
          para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
          btn='Register now'
          img={model}
          tagline='Get your Trademark Renewed @₹ 2,000 excluding GST'
          services={services}
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
