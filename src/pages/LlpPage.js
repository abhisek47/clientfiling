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
    'Required Timing - 20 days',
    'Completely Online – No need to visit office',
    'CA Assisted LLP Filing for all your LLP needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>
          Limited Liability Partnership Registration - ClientFilingIndia
        </title>
        <meta
          name='description'
          content='This is business form which provides benefits of limited liability and flexibility of a partnership business. Compliance requirement is less in LLP as compared to company form of business structure.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Limited Liability Partnership'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        id='llp'
        tagline='Get your LLP registered  @₹ 10,000/-'
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
