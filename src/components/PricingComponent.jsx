import React from 'react';
import { Row, Col, Typography, Button, Card, Statistic, List } from 'antd';

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
              <Statistic title='Basic' value={basic} />
            </div>
            <div className='card-body'>
              <List
                dataSource={dataOne}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <Button type='primary'>Buy now</Button>
            </div>
          </Card>
        </Col>
        <Col className='ant-col-sm-24 ant-col-lg-8'>
          <Card hoverable>
            <div className='card-head'>
              <Statistic title='Standard' value={standard} />
            </div>
            <div className='card-body'>
              <List
                dataSource={dataTwo}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <Button type='primary'>Buy now</Button>
            </div>
          </Card>
        </Col>
        <Col className='ant-col-sm-24 ant-col-lg-8'>
          <Card hoverable>
            <div className='card-head'>
              <Statistic title='Premium' value={premium} />
            </div>
            <div className='card-body'>
              <List
                dataSource={dataThree}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <Button type='primary'>Buy now</Button>
            </div>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default PricingComponent;
