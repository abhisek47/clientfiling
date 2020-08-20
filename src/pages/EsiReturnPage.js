import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_14.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import EsiReturnComponent from '../components/EsiReturnComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

class EsiReturnPage extends Component {
  render() {
    const services = [
      'Filing of Application for GST Return Filing',
      'Required Timing - 2 days',
      '3 months GST return filing',
      'Completely Online – No need to visit office',
    ];
    return (
      <React.Fragment>
        <HeaderComponent />
        <ServiceBannerComponent
          head='ESI Return Filing'
          para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
          btn='Register now'
          img={model}
          tagline='Get your ESI Return filing @₹ 6,779 excluding GST'
          services={services}
        />
        <div className='container'>
          <BreadcrumbComponent title='Employees State Insurance Return' />
          <EsiReturnComponent />
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default EsiReturnPage;
