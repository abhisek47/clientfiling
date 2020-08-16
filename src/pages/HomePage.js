import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import BannerComponent from '../components/BannerComponent';
import StatsComponent from '../components/StatsComponent';
import PopularComponent from '../components/PopularComponent';
import QuotesComponent from '../components/QuotesComponent';
import SupportComponent from '../components/SupportComponent';
import FaqComponent from '../components/FaqComponent';
import FooterComponent from '../components/FooterComponent';

export class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <BannerComponent />
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
