import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_9.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import ItrFiveComponent from '../components/ItrFiveComponent';
import { Helmet } from 'react-helmet';

const ItrFivePage = () => {
  const services = [
    'Income tax return filing for persons having capital gains.',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted ITR Filing for all your income tax needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>Income Tax Return Filing (ITR-5) - Clientfilingindia</title>
        <meta
          name='description'
          content='ITR-5 is the form used by the individuals and Hindu undivided families who are registered as ‘Partners’ in a firm.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income Tax Return - 5'
        btn='Register now'
        img={model}
        id='itr'
        tagline='Get your ITR-5 filing @₹ 3,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income Tax Return - 5' />
        <ItrFiveComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default ItrFivePage;
