import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_12.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import PfComponent from '../components/PfComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const PfPage = () => {
  const services = [
    'Filing of Application for GST Return Filing',
    'Required Timing - 2 days',
    '3 months GST return filing',
    'Completely Online – No need to visit office',
    'Cloud backup for 10 years',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Provident Fund Registration'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        tagline='Get your Provident Fund filing @₹ 6,779 excluding GST'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Provident Fund' />
        <PfComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default PfPage;
