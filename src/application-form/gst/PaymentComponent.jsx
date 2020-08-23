import React, { Component } from 'react';
import { Typography, Button, Descriptions, Space, Form } from 'antd';
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';

class PaymentComponent extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
    window.scrollTo(0, 0);
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
    window.scrollTo(0, 0);
  };
  render() {
    const {
      values: {
        businessName,
        businessType,
        businessAddress,
        businessEmail,
        city,
        state,
        ownerName,
        ownerNumber,
        ownerAdhaar,
        ownerPan,
        addressProf,
      },
    } = this.props;
    return (
      <React.Fragment>
        <HeaderComponent />
        <div className='container application-form'>
          <Typography.Title className='application-title'>
            GST Application Form
          </Typography.Title>
          <div className='steps-content'>
            <div className='form-container'>
              <Descriptions title='Business Info' style={{ textAlign: 'left' }}>
                <Descriptions.Item label='Business Name'>
                  {businessName}
                </Descriptions.Item>
                <Descriptions.Item label='Business Type'>
                  {businessType}
                </Descriptions.Item>
                <Descriptions.Item label='Email'>
                  {businessEmail}
                </Descriptions.Item>
                <Descriptions.Item label='Address'>
                  {businessAddress}
                </Descriptions.Item>
                <Descriptions.Item label='City'>{city}</Descriptions.Item>
                <Descriptions.Item label='State'>{state}</Descriptions.Item>
              </Descriptions>
              <Descriptions title='User Info' style={{ textAlign: 'left' }}>
                <Descriptions.Item label='User Name'>
                  {ownerName}
                </Descriptions.Item>
                <Descriptions.Item label='User Number'>
                  {ownerNumber}
                </Descriptions.Item>
                <Descriptions.Item label='User Adhaar Number'>
                  {ownerAdhaar}
                </Descriptions.Item>
                <Descriptions.Item label='User PAN Number'>
                  {ownerPan}
                </Descriptions.Item>
                <Descriptions.Item label='Document Proff'>
                  {addressProf}
                </Descriptions.Item>
              </Descriptions>
              {/* submit button */}
              <Form.Item>
                <Space direction='horizontal'>
                  <Button htmlType='submit' size='large' onClick={this.back}>
                    Previous
                  </Button>
                  <Button
                    type='primary'
                    htmlType='submit'
                    size='large'
                    onClick={this.continue}>
                    Confirm
                  </Button>
                </Space>
              </Form.Item>
            </div>
          </div>
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default PaymentComponent;
