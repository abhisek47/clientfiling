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
        <title>Compliances For Partnership Firm - ClientFilingIndia</title>
        <meta
          name='description'
          content='A Private Company is an entity enjoying a separate identity which requires maintaining its active status through the regular filing with MCA. For every company, it is compulsory to file an annual return and audited financial statements with MCA for every financial year.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Compliances For Partnership Firm, Society, Trust, NGO'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
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
