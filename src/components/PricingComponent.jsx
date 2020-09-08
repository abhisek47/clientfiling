import React, { useState } from 'react';
import { Row, Col, Typography, Button, Card, Statistic, List } from 'antd';
import { TagsFilled } from '@ant-design/icons';
import rupeeIndian from '../assets/rupee-indian.svg';
import Axios from 'axios';

const PricingComponent = ({
  dataOne,
  dataTwo,
  dataThree,
  basic,
  standard,
  premium,
}) => {
  const { Title } = Typography;

  const paymentHandler = async (e) => {
    const API_URL = 'http://localhost:8000/';
    e.preventDefault();
    const orderUrl = `${API_URL}order`;
    const response = await Axios.get(orderUrl);
    const { data } = response;
    const options = {
      key: 'rzp_test_QULtv0YgFcFWCV',
      name: 'Client Filing India',
      description: 'Some Description',
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const url = `${API_URL}capture/${paymentId}`;
          const captureResponse = await Axios.post(url, {});
          console.log(captureResponse.data);
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: '#686CFD',
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <React.Fragment>
      <Title className='gst-caption'>Choose your plan</Title>
      <Row gutter={16}>
        <Col className='ant-col-sm-24 ant-col-lg-8'>
          <Card className='price'>
            <div className='card-head'>
              <Statistic
                title='Basic'
                value={basic}
                prefix={
                  <img src={rupeeIndian} className='rupees' alt='basic' />
                }
              />
              <span className='inclusive'>All inclusive</span>
            </div>
            <div className='card-body'>
              <List
                dataSource={dataOne}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <Button icon={<TagsFilled />} type='primary'>
                Buy now
              </Button>
            </div>
          </Card>
        </Col>
        <Col className='ant-col-sm-24 ant-col-lg-8'>
          <Card className='price'>
            <div className='card-head'>
              <Statistic
                title='Standard'
                value={standard}
                prefix={
                  <img src={rupeeIndian} className='rupees' alt='standard' />
                }
              />
              <span className='inclusive'>All inclusive</span>
            </div>
            <div className='card-body'>
              <List
                dataSource={dataTwo}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <Button
                icon={<TagsFilled />}
                type='primary'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Buy now
              </Button>
            </div>
          </Card>
        </Col>
        <Col className='ant-col-sm-24 ant-col-lg-8'>
          <Card className='price'>
            <div className='card-head'>
              <Statistic
                title='Premium'
                value={premium}
                prefix={
                  <img src={rupeeIndian} className='rupees' alt='premium' />
                }
              />
              <span className='inclusive'>All inclusive</span>
            </div>
            <div className='card-body'>
              <List
                dataSource={dataThree}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <Button
                icon={<TagsFilled />}
                type='primary'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Buy now
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default PricingComponent;
