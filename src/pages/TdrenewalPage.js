import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_7.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import TdrenewalComponent from '../components/TdrenewalComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import { Helmet } from 'react-helmet';

const ItrThreePage = () => {
  const services = [
    'Trademark filing under one class for proprietorship and small enterprises. Inclusive of government fee and taxes.',
    'Required Timing - 10 days',
    'CA Assisted Trademark Renewal Filing for all your renewal needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>Trademark Renewal - Clientfilingindia</title>
        <meta
          name='description'
          content='The registration of a trademark is valid only for a period of 10 years. After which, it can be renewed from time to time.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Trademark Renewal'
        btn='Register now'
        img={model}
        id='trademark-renewal'
        tagline='Get your Trademark Renewed @₹ 2,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Trademark Renewal' />
        <TdrenewalComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default ItrThreePage;
