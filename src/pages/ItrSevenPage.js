import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_11.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import ItrSevenComponent from '../components/ItrSevenComponent';
import { Helmet } from 'react-helmet';

const ItrSevenPage = () => {
  const services = [
    'Income tax return filing for persons having capital gains.',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted ITR Filing for all your income tax needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>Income Tax Return Filing (ITR-7) - ClientFilingIndia</title>
        <meta
          name='description'
          content='For individuals and HUF with income from profits of a business or profession. ITR-7 is the form used by the individuals and Hindu Undivided Families who are registered as ‘Partners’ in a firm. . This is applicable for the professionals but in a partnership profession. The partner must be earning income in the form of interest, salary, bonus, commission, etc.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income Tax Return - 7'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        id='itr'
        tagline='Get your ITR-7 filing @₹ 4,237/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income Tax Return - 7' />
        <ItrSevenComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default ItrSevenPage;
