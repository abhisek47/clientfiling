import React, { useContext, useState } from 'react';
import { Form, Input, Button, Card, Typography, Space } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { withRouter, useHistory } from 'react-router-dom';
import { LoginContext } from '../App';
import db from '../firebase';
import firebase from 'firebase';

const FormComponent = ({ tagline, id }) => {
  const [login, setLogin] = useContext(LoginContext);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const history = useHistory();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    setLogin(true);
    // db.collection('login-data').add({
    //   email: email,
    //   phone: phone,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // });
    history.push(`/${id}-application-form`);
  };
  const { Title } = Typography;
  return (
    <React.Fragment>
      <div className='login-form'>
        <Card style={{ fontFamily: 'Source Sans Pro' }}>
          <Typography>
            <Title level={3}>{tagline}</Title>
          </Typography>
          <Form
            name='normal_login'
            className='login-form'
            initialValues={{ remember: true }}
            onFinish={onFinish}>
            <Form.Item
              name='email'
              rules={[{ required: true, message: 'Please input your Email!' }]}>
              <Input
                style={{ padding: '10px' }}
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                prefix={<MailOutlined className='site-form-item-icon' />}
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
                {
                  pattern: /^[2-9]{2}\d{8}$/,
                  message: 'Please input 10 digit number!',
                },
              ]}>
              <Input
                style={{ padding: '10px' }}
                prefix={
                  <PhoneOutlined rotate='90' className='site-form-item-icon' />
                }
                type='number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder='Phone number'
              />
            </Form.Item>

            <Form.Item>
              <Space direction='horizontal'>
                <Button
                  type='primary'
                  htmlType='submit'
                  size='large'
                  className='login-form-button'>
                  Buy now
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default withRouter(FormComponent);
