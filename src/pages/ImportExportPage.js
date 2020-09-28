import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_20.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import ImportExportComponent from '../components/ImportExportComponent';
import { Helmet } from 'react-helmet';

const ImportExportPage = () => {
  const services = [
    'Filing of Application for Import Export Code Registration',
    'Required Timing - 9 days',
    'Completely Online – No need to visit office',
    'CA Assisted Import Export Filing for all your import export needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>Import Export Code Registration - Clientfilingindia</title>
        <meta
          name='description'
          content='Import Export Licence is a 10 digit code which is provided by DGFT for import export transactions. IEC can be obtained in personal name or in company name.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Import Export Code Registration'
        btn='Register now'
        img={model}
        tagline='Get your Import Export Code registered @₹ 3,500 excluding GST'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Import Export Code' />
        <ImportExportComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default ImportExportPage;
