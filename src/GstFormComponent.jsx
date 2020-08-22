import React, { Component } from 'react';
import { Steps, Button, message, Typography } from 'antd';
import BusinessComponent from './application-form/gst/BusinessComponent';

class GstFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    const { Step } = Steps;

    const steps = [
      {
        title: 'Business Details',
        content: <BusinessComponent />,
      },
      {
        title: 'Business Owner Details ',
        content: 'Second-content',
      },
      {
        title: 'Payment Details',
        content: 'Last-content',
      },
    ];
    return (
      <React.Fragment>
        <div className='container'>
          <div className='gst-application application-form'>
            <Typography.Title className='application-title'>
              GST Application Form
            </Typography.Title>
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className='steps-content'>{steps[current].content}</div>
            <div className='steps-action'>
              {current < steps.length - 1 && (
                <Button size='large' type='primary' onClick={() => this.next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  size='large'
                  type='primary'
                  onClick={() => message.success('Processing complete!')}>
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button
                  size='large'
                  style={{ margin: '0 8px' }}
                  onClick={() => this.prev()}>
                  Previous
                </Button>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GstFormComponent;
