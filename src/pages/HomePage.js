import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import BannerComponent from '../components/BannerComponent';
import StatsComponent from '../components/StatsComponent';
import PopularComponent from '../components/PopularComponent';
import QuotesComponent from '../components/QuotesComponent';
import SupportComponent from '../components/SupportComponent';
import FaqComponent from '../components/FaqComponent';
import FooterComponent from '../components/FooterComponent';
import banner from '../assets/banner2.png';

export class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <BannerComponent
          head='We Are Helping Startup To Grow Their Business'
          para='we have over 8+ years of corporate and consulting
                      experience with top firms. Our network includes
                      experienced Chartered Accountants, Company Secretaries,
                      Lawyers, Cost Accountants and many more.'
          btn='Get started'
          img={banner}
        />
        <StatsComponent />
        <PopularComponent />
        <QuotesComponent />
        <SupportComponent />
        <FaqComponent />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default HomePage;
