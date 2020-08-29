import React, { Component } from 'react';
import RenewalComponent from '../application-form/trademarkRenewal/RenewalComponent';
import PaymentComponent from '../application-form/trademarkRenewal/PaymentComponent';

class TmRenewUserForm extends Component {
  state = {
    step: 1,
    name: '',
    address: '',
    pan: '',
    govtFees: '',
    city: '',
    state: '',
    idProof: '',
    regCertificate: '',
    tradeLicence: '',
  };

  //   procced to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //   go back to the prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //   handle field change
  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  onTypeChange = (value) => {
    console.log(value);
    this.setState({
      businessType: value,
    });
  };

  onStateChange = (value) => {
    console.log(value);
    this.setState({
      state: value,
    });
  };

  uploadIdProof = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    this.setState({
      idProof: 'hello there ' + e,
    });

    return e && e.fileList;
  };

  uploadRegCertificate = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    this.setState({
      regCertificate: 'hello there ' + e,
    });

    return e && e.fileList;
  };

  uploadTradeLicence = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    this.setState({
      tradeLicence: 'hello there ' + e,
    });

    return e && e.fileList;
  };

  render() {
    const {
      step,
      name,
      address,
      pan,
      govtFees,
      city,
      state,
      tmNumber,
      tmClass,
      idProof,
      regCertificate,
      tradeLicence,
    } = this.state;
    const values = {
      name,
      address,
      pan,
      govtFees,
      city,
      state,
      tmNumber,
      tmClass,
      idProof,
      regCertificate,
      tradeLicence,
    };

    switch (step) {
      case 1:
        return (
          <RenewalComponent
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            onTypeChange={this.onTypeChange}
            onStateChange={this.onStateChange}
            uploadIdProof={this.uploadIdProof}
            uploadRegCertificate={this.uploadRegCertificate}
            uploadTradeLicence={this.uploadTradeLicence}
            values={values}
            title='Trademark Renewal Application Form'
            para='Fill in the below form to apply for Trademark renewal online. It will take less than 5 mins. Your details are secured by SSL.'
          />
        );
      case 2:
        return (
          <PaymentComponent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            title='Trademark Renewal Application Form'
            para='Fill in the below form to apply for Trademark renewal online. It will take less than 5 mins. Your details are secured by SSL.'
          />
        );
      default:
        return (
          <PaymentComponent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}

export default TmRenewUserForm;
