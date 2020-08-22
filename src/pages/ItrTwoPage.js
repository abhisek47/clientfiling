import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_4.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ItrTwoComponent from '../components/ItrTwoComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const ItrTwoPage = () => {
  const services = [
    'Income tax return filing for persons having DIN or owing private limited company shares.',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income Tax Return - 2'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        tagline='Get your ITR-2 filing @₹ 2,456 excluding GST'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income Tax Return - 2' />
        <ItrTwoComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default ItrTwoPage;
