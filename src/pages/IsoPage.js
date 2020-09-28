import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_21.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import IsoComponent from '../components/IsoComponent';
import { Helmet } from 'react-helmet';

const IsoPage = () => {
  const services = [
    'Filing of Application for ISO Registration',
    'Required Timing - 9 days',
    'Completely Online – No need to visit office',
    'CA Assisted ISO Filing for all your ISO needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>ISO Registration Online - Clientfilingindia</title>
        <meta
          name='description'
          content='In order to be certified to the ISO 9001 standard, a company must follow the requirements set forth in the ISO 9001 Standard.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='ISO Registration'
        btn='Register now'
        img={model}
        tagline='Get your ISO registered @₹ 6,000 excluding GST'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='International Organization for Standardization' />
        <IsoComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default IsoPage;
