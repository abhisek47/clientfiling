import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_25.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import TdsComponent from '../components/TdsComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const TdsPage = () => {
  const services = [
    'TDS Return Filing Online',
    'Required Timing - 10 days',
    'CA Assisted Trademark Filing for all your Tax needs',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Tax Deduction at Source'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        id='tds'
        tagline='Get your TDS Filing @₹ 1,499/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Tax Deduction at Source' />
        <TdsComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default TdsPage;
