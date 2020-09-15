import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_10.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import ItrSixComponent from '../components/ItrSixComponent';
import { Helmet } from 'react-helmet';

const ItrSixPage = () => {
  const services = [
    'Income tax return filing for persons having capital gains.',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted ITR Filing for all your income tax needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>Income Tax Return Filing (ITR-6) - ClientFilingIndia</title>
        <meta
          name='description'
          content='ITR Form 6 or ITR 6 is an income tax return form that is used by companies to e-file income tax return if they do not claim exemption under Section 11 of the Income Tax Act, 1961. Under existing Income Tax rules, companies that can claim exemption u/s 11 are those who have income from property that is held for charitable or religious purposes.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income Tax Return - 6'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        id='itr'
        tagline='Get your ITR-6 filing @₹ 4,237/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income Tax Return - 6' />
        <ItrSixComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default ItrSixPage;
