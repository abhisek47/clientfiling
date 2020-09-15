import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import model from '../assets/model_6.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import TrademarkComponent from '../components/TrademarkComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import { Helmet } from 'react-helmet';

const ItrThreePage = () => {
  const services = [
    'Trademark filing under one class for proprietorship and small enterprises. Inclusive of government fee and taxes.',
    'Required Timing - 10 days',
    'CA Assisted Trademark Filing for all your Trademark needs',
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>Trademark Registration - ClientFilingIndia</title>
        <meta
          name='description'
          content='A trademark  is a type of intellectual property consisting of a recognizable sign, design,or expression which identifies products or services of a particular source from those of others, although trademarks used to identify services are usually called service marks.'
        />
      </Helmet>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Trademark Registration'
        para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
        btn='Register now'
        img={model}
        id='trademark'
        tagline='Get your Trademark registered @₹ 6,490/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Trademark' />
        <TrademarkComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default ItrThreePage;
