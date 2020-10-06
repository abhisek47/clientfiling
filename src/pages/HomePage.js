import React, { useEffect } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import BannerComponent from '../components/BannerComponent';
import StatsComponent from '../components/StatsComponent';
import PopularComponent from '../components/PopularComponent';
import QuotesComponent from '../components/QuotesComponent';
import SupportComponent from '../components/SupportComponent';
import FaqComponent from '../components/FaqComponent';
import FooterComponent from '../components/FooterComponent';
import myImg from '../assets/bts.png';
import sal from 'sal.js';

const HomePage = () => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <React.Fragment>
      <HeaderComponent />
      <BannerComponent
        head='We are helping startup to grow their business'
        para='We have over 8+ years of corporate and consulting experience with top firms. Our network includes experienced Chartered Accountants, Company Secretaries, Lawyers, Cost Accountants and many more.'
        btn='Get Started'
        img={myImg}
      />
      <StatsComponent />
      <PopularComponent />
      <QuotesComponent />
      <SupportComponent />
      <FaqComponent />
      <FooterComponent />
    </React.Fragment>
  );
};

export default HomePage;
