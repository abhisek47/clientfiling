import React, { Component } from 'react';
import {
  Form,
  Input,
  Typography,
  Button,
  Row,
  Col,
  Divider,
  Space,
  Upload,
} from 'antd';
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';
import { InboxOutlined } from '@ant-design/icons';

class OwnerComponent extends Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
    this.props.nextStep();
    window.scrollTo(0, 0);
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
    window.scrollTo(0, 0);
  };

  render() {
    const { values, handleChange, onUploadChange } = this.props;

    return (
      <React.Fragment>
        <HeaderComponent />
        <div className='container application-form'>
          <Typography.Title className='application-title'>
            GST Application Form
          </Typography.Title>
          <Divider orientation='left'>Owner Information</Divider>
          <div className='steps-content'>
            <Form
              layout='vertical'
              className='form-container login-form'
              name='normal_login'
              initialValues={{ remember: true }}
              onFinish={this.onFinish}>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* owner name */}
                  <Form.Item
                    name='ownerName'
                    label='Name'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your name!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter yout business name'
                      onChange={handleChange('ownerName')}
                      value={values.ownerName}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* owner number */}
                  <Form.Item
                    name='ownerNumber'
                    label='Mobile Number'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your mobile number!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='number'
                      placeholder='Enter your phone number'
                      onChange={handleChange('ownerNumber')}
                      value={values.ownerNumber}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* owner adhaar */}
                  <Form.Item
                    name='ownerAdhaar'
                    label='Adhaar Number'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your adhaar card number!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your adhaar card number'
                      onChange={handleChange('ownerAdhaar')}
                      value={values.ownerAdhaar}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* owner pan */}
                  <Form.Item
                    name='ownerPan'
                    label='PAN Number'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your PAN number!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter yout business PAN card number'
                      onChange={handleChange('ownerPan')}
                      value={values.ownerPan}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* owner address */}
                  <Form.Item label='Attached Documents Prof'>
                    <Form.Item
                      name='dragger'
                      valuePropName='fileList'
                      getValueFromEvent={onUploadChange}
                      noStyle
                      rules={[
                        {
                          required: true,
                          message: 'Please input your address prof documents!',
                        },
                      ]}>
                      <Upload.Dragger name='files' action='/#' method='GET'>
                        <p className='ant-upload-drag-icon'>
                          <InboxOutlined />
                        </p>
                        <p className='ant-upload-text'>
                          Click or drag file to this area to upload
                        </p>
                        <p className='ant-upload-hint'>
                          Adress proof like electric bill, telephone bil, rent
                          Agreement, property document etc.
                        </p>
                      </Upload.Dragger>
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'></Col>
              </Row>
              {/* submit button */}
              <Form.Item>
                <Space direction='horizontal'>
                  <Button
                    type='primary'
                    htmlType='submit'
                    className='login-form-button'
                    size='large'>
                    Next
                  </Button>
                  <Button
                    type='primary'
                    htmlType='submit'
                    className='login-form-button'
                    size='large'
                    onClick={this.back}>
                    Previous
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default OwnerComponent;
