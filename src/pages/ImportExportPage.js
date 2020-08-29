import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_20.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import ImportExportComponent from '../components/ImportExportComponent';

const ImportExportPage = () => {
  const services = [
    'Filing of Application for Import Export Code Registration',
    'Required Timing - 9 days',
    'Completely Online – No need to visit office',
    'CA Assisted Import Export Filing for all your import export needs',
  ];
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Import Export Code Registration'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
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
