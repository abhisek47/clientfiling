import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_2.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import GstreturnComponent from '../components/GstreturnComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const GstreturnPage = () => {
  const services = [
    'Required Timing - 2 days',
    '3 months GST return filing',
    'Completely Online – No need to visit office',
    'CA Assisted GST Return Filing for all your GST return needs',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='GST Return Filing'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        id='gst-return'
        tagline='Get your GST return filing @₹ 2,899/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='GST Return' />
        <GstreturnComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default GstreturnPage;
