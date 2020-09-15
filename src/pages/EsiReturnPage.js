import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_14.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import EsiReturnComponent from '../components/EsiReturnComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import { Helmet } from 'react-helmet';

const EsiReturnPage = () => {
  const services = [
    'Filing of Application for ESI Return Filing',
    'Required Timing - 2 days',
    'Completely Online – No need to visit office',
    'CA Assisted ESI Return filing for all your ESI needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>ESI Return Filing - ClientFilingIndia</title>
        <meta
          name='description'
          content='Established under the ESI Act, 1948, ESIC (Employees’ State Insurance Corporation) provides benefits to employees in the event of their sickness, death, disablement, injury, etc. The finance of this scheme comes from contributions from both employees and employers.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='ESI Return Filing'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        tagline='Get your ESI Return filing @₹ 6,779/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Employees State Insurance Return' />
        <EsiReturnComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default EsiReturnPage;
