import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_5.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ItrThreeComponent from '../components/ItrThreeComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import { Helmet } from 'react-helmet';

const ItrThreePage = () => {
  const services = [
    'Income tax return filing for persons having capital gains.',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted ITR Filing for all your income tax needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>Income Tax Return Filing (ITR-3) - ClientFilingIndia</title>
        <meta
          name='description'
          content='For individuals and HUF with income from profits of a business or profession. ITR 3 is the form used by the individuals and Hindu Undivided Families who are registered as ‘Partners’ in a firm. . This is applicable for the professionals but in a partnership profession. The partner must be earning income in the form of interest, salary, bonus, commission, etc.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income Tax Return - 3'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        id='itr'
        tagline='Get your ITR-3 filing @₹ 2,900/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income Tax Return - 3' />
        <ItrThreeComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default ItrThreePage;
