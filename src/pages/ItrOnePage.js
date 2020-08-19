import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_3.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ItrOneComponent from '../components/ItrOneComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

class ItrOnePage extends Component {
  render() {
    const services = [
      'Income tax return filing for an individual with salary income of less than Rs.5 lakhs.',
      'Required Timing - 2 days',
      'Completely Online – No need to visit office',
    ];
    return (
      <React.Fragment>
        <HeaderComponent />
        <ServiceBannerComponent
          head='Income Tax Return - 1'
          para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
          btn='Register now'
          img={model}
          tagline='Get your ITR-1 filing @₹ 700 excluding GST'
          services={services}
        />
        <div className='container'>
          <BreadcrumbComponent title='Income Tax Return - 1' />
          <ItrOneComponent />
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default ItrOnePage;
