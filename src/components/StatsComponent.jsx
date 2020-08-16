import React, { Component } from 'react';
import { Layout, Row, Col, Card, Typography } from 'antd';
import {
  HomeFilled,
  BulbFilled,
  NotificationFilled,
  SmileFilled,
} from '@ant-design/icons';
import CountUp from 'react-countup';

class StatsComponent extends Component {
  render() {
    const { Title, Paragraph } = Typography;
    return (
      <React.Fragment>
        <Layout className='statistic'>
          <Layout.Content>
            <div className='container'>
              <Row gutter={16}>
                <Col className='ant-col-sm-24 ant-col-md-6'>
                  <Card>
                    <Title>
                      <NotificationFilled style={{ color: '#2f54eb' }} />
                    </Title>
                    <Paragraph>Company Established</Paragraph>
                    <Paragraph className='text-light'>
                      <CountUp duration={5} end={2013} />
                    </Paragraph>
                  </Card>
                </Col>
                <Col className='ant-col-sm-24 ant-col-md-6'>
                  <Card>
                    <Title>
                      <BulbFilled style={{ color: '#faad14' }} />
                    </Title>
                    <Paragraph>Staff Members</Paragraph>
                    <Paragraph className='text-light'>
                      <CountUp duration={5} end={80} />
                    </Paragraph>
                  </Card>
                </Col>
                <Col className='ant-col-sm-24 ant-col-md-6'>
                  <Card>
                    <Title>
                      <HomeFilled style={{ color: '#52c41a' }} />
                    </Title>
                    <Paragraph>Offices Available</Paragraph>
                    <Paragraph className='text-light'>
                      <CountUp duration={5} end={6} />
                    </Paragraph>
                  </Card>
                </Col>
                <Col className='ant-col-sm-24 ant-col-md-6'>
                  <Card>
                    <Title>
                      <SmileFilled style={{ color: '#ff7a45' }} />
                    </Title>
                    <Paragraph>Happy Clientele</Paragraph>
                    <Paragraph className='text-light'>
                      <CountUp duration={5} end={4500} />
                    </Paragraph>
                  </Card>
                </Col>
              </Row>
            </div>
          </Layout.Content>
        </Layout>
      </React.Fragment>
    );
  }
}

export default StatsComponent;
