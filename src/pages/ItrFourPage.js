import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_8.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import ItrFourComponent from '../components/ItrFourComponent';

const ItrFourPage = () => {
  const services = [
    'Income tax return filing for persons having capital gains.',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted ITR Filing for all your income tax needs',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income Tax Return - 4'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        tagline='Get your ITR-4 filing @₹ 2,540 excluding GST'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income Tax Return - 4' />
        <ItrFourComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default ItrFourPage;
