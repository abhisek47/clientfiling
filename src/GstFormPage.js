import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import GstFormComponent from './GstFormComponent';

class GstFormPage extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <GstFormComponent />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default GstFormPage;
