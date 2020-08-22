import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_5.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ItrThreeComponent from '../components/ItrThreeComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const ItrThreePage = () => {
  const services = [
    'Income tax return filing for persons having capital gains.',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income Tax Return - 3'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        tagline='Get your ITR-3 filing @₹ 3,300 excluding GST'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income Tax Return - 3' />
        <ItrThreeComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default ItrThreePage;
