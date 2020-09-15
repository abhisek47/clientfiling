import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_12.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import PfComponent from '../components/PfComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import { Helmet } from 'react-helmet';

const PfPage = () => {
  const services = [
    'Filing of Application for Provident Fund Filing',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'Cloud backup for 10 years',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>Provident Fund Registration - ClientFilingIndia</title>
        <meta
          name='description'
          content='Establishment Registration with Employers Provident Fund Organisation (EPFO) is mandatory if the number of employees exceeds 20 and may be obtained voluntarily if the employee’s number is less than twenty. Our dedicated team will help you to your company with EPFO'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Provident Fund Registration'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        tagline='Get your Provident Fund filing @₹ 8,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Provident Fund' />
        <PfComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default PfPage;
