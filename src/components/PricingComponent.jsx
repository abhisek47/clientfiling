import React from 'react';
import { Row, Col, Typography, Button, Card, Statistic, List } from 'antd';

const PricingComponent = ({ data, basic, standard, premium }) => {
  const { Title } = Typography;
  return (
    <React.Fragment>
      <div className='gst-pricing' id='gst-pricing'>
        <Title className='gst-caption'>Choose your plan</Title>
        <Row gutter={16} style={{ alignItems: 'self-start' }}>
          <Col className='ant-col-sm-24 ant-col-lg-8'>
            <Card hoverable>
              <div className='card-head'>
                <Statistic title='Basic' value={basic} />
              </div>
              <div className='card-body'>
                <List
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item>
                      <Typography.Text></Typography.Text> {item}
                    </List.Item>
                  )}
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
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item>
                      <Typography.Text></Typography.Text> {item}
                    </List.Item>
                  )}
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
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item>
                      <Typography.Text></Typography.Text> {item}
                    </List.Item>
                  )}
                />
                <Button type='primary'>Buy now</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default PricingComponent;
