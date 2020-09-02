import React from 'react';
import { Row, Col, Typography, Button, Card, Statistic, List } from 'antd';
import { TagsFilled } from '@ant-design/icons';
import rupeeIndian from '../assets/rupee-indian.svg';

const PricingComponent = ({
  dataOne,
  dataTwo,
  dataThree,
  basic,
  standard,
  premium,
}) => {
  const { Title } = Typography;
  return (
    <React.Fragment>
      <Title className='gst-caption'>Choose your plan</Title>
      <Row gutter={16}>
        <Col className='ant-col-sm-24 ant-col-lg-8'>
          <Card hoverable>
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
          <Card hoverable>
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
          <Card hoverable>
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
