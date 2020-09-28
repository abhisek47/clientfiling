import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_19.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import LlpCompliancesComponent from '../components/LlpCompliancesComponent';
import { Helmet } from 'react-helmet';

const PrivateCompliancesPage = () => {
  const services = [
    'Required Timing - 20 days',
    'Completely Online – No need to visit office',
    'CA Assisted LLP Compliances for all your LLP needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>
          Annual Compliances For Limited Liability Partnership -
          Clientfilingindia
        </title>
        <meta
          name='description'
          content='LLP enjoys a separate status. Thus, an organisation needs to maintain its active status by regularly filing with the Ministry of Corporate Affairs (MCA).'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Compliances For Limited Liability Partnership'
        btn='Register now'
        img={model}
        tagline='Get your Annual LLP registered  @₹ 18,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Compliances For Limited Liability Partnership' />
        <LlpCompliancesComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default PrivateCompliancesPage;
