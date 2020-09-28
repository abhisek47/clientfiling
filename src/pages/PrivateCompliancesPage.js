import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_18.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import PrivateCompliancesComponent from '../components/PrivateCompliancesComponent';
import { Helmet } from 'react-helmet';

const PrivateCompliancesPage = () => {
  const services = [
    'Required Timing - 20 days',
    'Completely Online – No need to visit office',
    'CA Assisted Company Compliances for all your company needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>
          Annual Compliances For Private Limited Company - Clientfilingindia
        </title>
        <meta
          name='description'
          content='A Private Limited Company is an entity enjoying a separate identity which requires maintaining its active status through the regular filing with MCA.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Compliances For Private Company'
        btn='Register now'
        img={model}
        tagline='Get your Annual Compliances registered under Private Company @₹ 20,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Compliances For Private Company' />
        <PrivateCompliancesComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default PrivateCompliancesPage;
