import React, { useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import {
  Layout,
  Form,
  Input,
  Button,
  Card,
  Typography,
  Space,
  Row,
  Col,
} from 'antd';
import { MailOutlined, PhoneOutlined, SmileFilled } from '@ant-design/icons';
import { withRouter, useHistory, Link } from 'react-router-dom';
import userLogin from '../assets/userLogin.svg';

const UserLogin = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const { Title, Paragraph, Text } = Typography;
  return (
    <React.Fragment>
      <HeaderComponent />
      <Layout style={{ background: 'ghostwhite' }}>
        <div className='container'>
          <div className='user-login'>
            <Row align='middle'>
              <Col className='ant-col-lg-12 ant-col-sm-24'>
                <Card style={{ fontFamily: 'Source Sans Pro' }}>
                  <Typography>
                    <Title>Get Started</Title>
                    <Paragraph strong>
                      Connect with us. We are happy to help you
                    </Paragraph>
                  </Typography>
                  <Form
                    name='normal_login'
                    className='login-form'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}>
                    <Form.Item
                      name='email'
                      rules={[
                        { required: true, message: 'Please input your Email!' },
                      ]}>
                      <Input
                        style={{ padding: '10px' }}
                        type='email'
                        prefix={
                          <MailOutlined className='site-form-item-icon' />
                        }
                        placeholder='Email address'
                      />
                    </Form.Item>
                    <Form.Item
                      name='number'
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Phone number!',
                        },
                      ]}>
                      <Input
                        style={{ padding: '10px' }}
                        prefix={
                          <PhoneOutlined
                            rotate='90'
                            className='site-form-item-icon'
                          />
                        }
                        type='number'
                        placeholder='Phone number'
                        min={10}
                      />
                    </Form.Item>

                    <Form.Item>
                      <Space direction='horizontal'>
                        <Button
                          type='primary'
                          htmlType='submit'
                          size='large'
                          className='login-form-button'>
                          Submit
                        </Button>
                      </Space>
                    </Form.Item>
                  </Form>
                </Card>
              </Col>
              <Col className='ant-col-lg-12 ant-col-sm-24'>
                <img src={userLogin} alt='' />
              </Col>
            </Row>
          </div>
        </div>
      </Layout>
      <FooterComponent />
    </React.Fragment>
  );
};

export default UserLogin;
