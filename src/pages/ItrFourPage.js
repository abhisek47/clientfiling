import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_8.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import ItrFourComponent from '../components/ItrFourComponent';
import { Helmet } from 'react-helmet';

const ItrFourPage = () => {
  const services = [
    'Income tax return filing for persons having capital gains.',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted ITR Filing for all your income tax needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>Income Tax Return Filing (ITR-4) - ClientFilingIndia</title>
        <meta
          name='description'
          content='Form is applicable For Individuals, HUFs and Firms (other than LLP) being a Resident having Total Income upto Rs.50 lakhs and having income from Business and Profession which is computed under sections 44AD, 44ADA or 44AE.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income Tax Return - 4'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        id='itr'
        tagline='Get your ITR-4 filing @₹ 3,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income Tax Return - 4' />
        <ItrFourComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default ItrFourPage;
