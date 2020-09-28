import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_13.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import EsiComponent from '../components/EsiComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import { Helmet } from 'react-helmet';

const EsiPage = () => {
  const services = [
    'Filing of Application for ESI Filing',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted ESI filing for all your ESI needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>ESI Registration - Clientfilingindia</title>
        <meta
          name='description'
          content='ESI managed by the Employee State Insurance Corporation which is an autonomous body created by the law under the Ministry of Labour and Employment.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='ESI Registration'
        btn='Register now'
        img={model}
        id='esi'
        tagline='Get your ESI filing @₹ 6,779/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Employees State Insurance' />
        <EsiComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default EsiPage;
