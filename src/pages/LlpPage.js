import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_15.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import LlpComponent from '../components/LlpComponent';

const LlpPage = () => {
  const services = [
    'Required Timing - 20 days',
    'Completely Online – No need to visit office',
    'CA Assisted LLP Filing for all your LLP needs',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Limited Liability Partnership'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        id='llp'
        tagline='Get your LLP registered  @₹ 10,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Limited Liability Partnership' />
        <LlpComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default LlpPage;
