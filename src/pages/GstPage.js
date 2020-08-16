import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import BannerComponent from '../components/BannerComponent';
import FooterComponent from '../components/FooterComponent';
import gst from '../assets/gst.svg';
import GstComponent from '../components/GstComponent';
import BreadcrumbComponent from '../components/BreadcrumbComponent';

class GstPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <BannerComponent
          head='GST Registration'
          para='Register for your Company. A GST registration is a key business identification number which mandatory for export from India or Import to India.'
          btn='Register now'
          img={gst}
        />
        <div className='container'>
          <BreadcrumbComponent title='GST Registration' />
          <GstComponent />
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default GstPage;
