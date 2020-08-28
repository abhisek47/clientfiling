import React, { Component } from 'react';
import BusinessComponent from '../application-form/trademark/BusinessComponent';
import OwnerComponent from '../application-form/trademark/OwnerComponent';
import AboutComponent from '../application-form/trademark/AboutComponent';
import PaymentComponent from '../application-form/trademark/PaymentComponent';

class TrademarkUserForm extends Component {
  state = {
    step: 1,
    businessName: '',
    businessAddress: '',
    businessType: '',
    businessEmail: '',
    city: '',
    state: '',
    ownerName: '',
    ownerNumber: '',
    ownerAdhaar: '',
    ownerPan: '',
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

  onActivityChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      businessActivities: e.target.value,
    });
  };

  onRadioChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    this.setState({
      addressProf: 'hello there ' + e,
    });

    return e && e.fileList;
  };

  render() {
    const {
      step,
      businessName,
      businessAddress,
      businessEmail,
      businessType,
      city,
      state,
      ownerName,
      ownerNumber,
      ownerAdhaar,
      ownerPan,
    } = this.state;
    const values = {
      businessName,
      businessAddress,
      businessEmail,
      businessType,
      city,
      state,
      ownerName,
      ownerNumber,
      ownerAdhaar,
      ownerPan,
    };

    switch (step) {
      case 1:
        return (
          <BusinessComponent
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            onTypeChange={this.onTypeChange}
            onStateChange={this.onStateChange}
            values={values}
            title='Trademark Application Form'
            para='Fill in the below form to apply for Trademark registration online. It will take less than 5 mins. Your details are secured by SSL.'
          />
        );
      case 2:
        return (
          <OwnerComponent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            onUploadChange={this.normFile}
            values={values}
            title='Trademark Application Form'
            para='Fill in the below form to apply for Trademark registration online. It will take less than 5 mins. Your details are secured by SSL.'
          />
        );
      case 3:
        return (
          <AboutComponent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onActivityChange={this.onActivityChange}
            onRadioChange={this.onRadioChange}
            values={values}
            title='Trademark Application Form'
            para='Fill in the below form to apply for Trademark registration online. It will take less than 5 mins. Your details are secured by SSL.'
          />
        );
      case 4:
        return (
          <PaymentComponent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
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

export default TrademarkUserForm;
