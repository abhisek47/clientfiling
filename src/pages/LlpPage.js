import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_15.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import LlpComponent from '../components/LlpComponent';
import { Helmet } from 'react-helmet';

const LlpPage = () => {
  const services = [
    'Required Timing - 5 days',
    'Completely Online – No need to visit office',
    'CA Assisted LLP Filing for all your LLP needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>
          Limited Liability Partnership (LLP) Registration - Clientfilingindia
        </title>
        <meta
          name='description'
          content='This is a business form which provides benefits of limited liability and flexibility of a partnership business.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Limited Liability Partnership'
        btn='Register now'
        img={model}
        id='llp'
        tagline='Get your LLP registered  @₹ 11,800/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Limited Liability Partnership' />
        <LlpComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default LlpPage;
