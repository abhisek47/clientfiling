import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_16.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import PrivateComponent from '../components/PrivateComponent';
import { Helmet } from 'react-helmet';

const PrivatePage = () => {
  const services = [
    'Required Timing - 5 days',
    'Completely Online – No need to visit office',
    'CA Assisted Company Filing for all your Company needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>Private Limited Company Registration - ClientFilingIndia</title>
        <meta
          name='description'
          content='Company is a popular option to start a business in India by startups and businesses with higher growth aspirations. Pvt Ltd company is incorporated under the Companies Act of 2013, and governed by the Ministry of Corporate Affairs (MCA).'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Private Limited Company'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        id='private-company'
        tagline='Get your company registered @ 11,800/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Private Limited Company' />
        <PrivateComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default PrivatePage;
