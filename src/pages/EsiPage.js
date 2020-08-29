import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_13.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import EsiComponent from '../components/EsiComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const EsiPage = () => {
  const services = [
    'Filing of Application for ESI Filing',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted ESI filing for all your ESI needs',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='ESI Registration'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        tagline='Get your ESI filing @₹ 6,779 excluding GST'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Employees State Insurance' />
        <EsiComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default EsiPage;
