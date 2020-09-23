import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_4.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ItrTwoComponent from '../components/ItrTwoComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import { Helmet } from 'react-helmet';

const ItrTwoPage = () => {
  const services = [
    'Income tax return filing for persons having DIN or owing private limited company shares.',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted ITR Filing for all your income tax needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>Income Tax Return Filing (ITR-2) - ClientFilingIndia</title>
        <meta
          name='description'
          content='Individuals and Hindu Undivided Families who have their Income for the Financial Year through Salary or Pension, more than One House Property, Income from Capital Gains, Income from foreign assets/Income, Income from business or profession as a partner (not proprietor) and other sources including lottery, racehorses, legal gambling are eligible to file their IT Return using ITR-2.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income Tax Return - 2'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        id='itr'
        tagline='Get your ITR-2 filing @₹ 2,900/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income Tax Return - 2' />
        <ItrTwoComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default ItrTwoPage;
