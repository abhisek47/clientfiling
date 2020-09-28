import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_3.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ItrOneComponent from '../components/ItrOneComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import { Helmet } from 'react-helmet';

const ItrOnePage = () => {
  const services = [
    'Income tax return filing for an individual with salary income of less than Rs.5 lakhs.',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted ITR Filing for all your income tax needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>Income Tax Return Filing (ITR-1) - Clientfilingindia</title>
        <meta
          name='description'
          content='ITR-1 this form is filed by the taxpayers and the individuals being a resident having total income up to INR 50 lakhs.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income Tax Return - 1'
        btn='Register now'
        img={model}
        id='itr'
        tagline='Get your ITR-1 filing @₹ 2900/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income Tax Return - 1' />
        <ItrOneComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default ItrOnePage;
