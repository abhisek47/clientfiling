import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_1.jpg';
import GstComponent from '../components/GstComponent';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import { Helmet } from 'react-helmet';

const GstPage = () => {
  const services = [
    'Secure GST Identification Number',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted GST Filing for all your GST needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>GST Registration Online - Clientfilingindia</title>
        <meta
          name='description'
          content='GST Number is a unique 15 digit number which is allotted to the assessed at the time of filing an application for registration for Goods and Service Tax.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='GST Registration Online'
        btn='Register now'
        img={model}
        id='gst'
        tagline='Get your company registered under GST @₹ 1,000/-'
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
