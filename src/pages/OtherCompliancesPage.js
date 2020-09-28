import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_30.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import OtherCompliancesComponent from '../components/OtherCompliancesComponent';
import { Helmet } from 'react-helmet';

const PrivateCompliancesPage = () => {
  const services = [
    'Required Timing - 20 days',
    'Completely Online – No need to visit office',
    'CA Assisted Partnership Compliances for all your partnership firm needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>Compliances For Partnership Firm - Clientfilingindia</title>
        <meta
          name='description'
          content='The Annual Compliances for Proprietorship Firm includes preparation of the tax audit and filing of the income tax return with the IT department.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Compliances For Partnership Firm, Society, Trust, NGO'
        btn='Register now'
        img={model}
        tagline='Get your Annual Compliances registered under Partnership Firm @₹ 23,600/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Compliances For Partnership Firm, Society, Trust, NGO' />
        <OtherCompliancesComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default PrivateCompliancesPage;
