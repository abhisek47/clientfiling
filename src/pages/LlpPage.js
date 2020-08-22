import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_15.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import LlpComponent from '../components/LlpComponent';

class LlpPage extends Component {
  render() {
    const services = [
      'Required Timing - 20 days',
      'Completely Online – No need to visit office',
      'CA Assisted GST Filing for all your GST needs',
    ];
    return (
      <React.Fragment>
        <HeaderComponent />
        <ServiceBannerComponent
          head='Limited Liability Partnership'
          para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
          btn='Register now'
          img={model}
          tagline='Get your LLP registered  @₹ 11,000 excluding GST'
          services={services}
        />
        <div className='container'>
          <BreadcrumbComponent title='Limited Liability Partnership' />
          <LlpComponent />
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default LlpPage;
