import React, { Component } from 'react';
import { Layout, Row, Col, Card, Typography } from 'antd';
import {
  HeartFilled,
  MessageFilled,
  SafetyCertificateFilled,
} from '@ant-design/icons';

class SupportComponent extends Component {
  render() {
    const { Title, Paragraph } = Typography;
    return (
      <React.Fragment>
        <Layout className='support'>
          <div className='container'>
            <Row gutter={16}>
              <Col className='ant-col-sm-24 ant-col-lg-8'>
                <Card>
                  <Typography>
                    <Title className='support-team'>
                      <HeartFilled />
                    </Title>
                    <Title level={4}>Vibrant Team</Title>
                    <Paragraph>
                      A talented workforce that works in collaboration with a
                      network of over 6000+ Professionals.
                    </Paragraph>
                  </Typography>
                </Card>
              </Col>
              <Col className='ant-col-sm-24 ant-col-lg-8'>
                <Card>
                  <Typography>
                    <Title className='support-time'>
                      <MessageFilled />
                    </Title>
                    <Title level={4}>24/7 Support</Title>
                    <Paragraph>
                      Get support through phone, email, mobile app or live chat
                      - 24/7, 365 days.
                    </Paragraph>
                  </Typography>
                </Card>
              </Col>
              <Col className='ant-col-sm-24 ant-col-lg-8'>
                <Card>
                  <Typography>
                    <Title className='support-payment'>
                      <SafetyCertificateFilled />
                    </Title>
                    <Title level={4}>Secure Payment</Title>
                    <Paragraph>
                      Easily pay online with EMI payments, credit or debit card,
                      net banking, PayPal and more.
                    </Paragraph>
                  </Typography>
                </Card>
              </Col>
            </Row>
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

export default SupportComponent;
