import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_1.jpg';
import GstComponent from '../components/GstComponent';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const GstPage = () => {
  const services = [
    'Filing of Application for GST Registration',
    'Secure GST Identification Number',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted GST Filing for all your GST needs',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='GST Registration Online'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        id='gst'
        tagline='Get your company registered under GST @₹ 3,500 excluding GST'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='GST Registration' />
        <GstComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default GstPage;
