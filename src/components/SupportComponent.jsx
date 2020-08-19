import React, { Component } from 'react';
import { Layout, Row, Col, Card, Typography } from 'antd';
// import {
//   HeartFilled,
//   MessageFilled,
//   SafetyCertificateFilled,
// } from '@ant-design/icons';
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import AOS from 'aos';

class SupportComponent extends Component {
  render() {
    const { Title, Paragraph } = Typography;
    AOS.init();
    return (
      <React.Fragment>
        <Layout className='support'>
          <div className='container'>
            <Row gutter={16}>
              <Col className='ant-col-sm-24 ant-col-lg-8'>
                <Card>
                  <Typography>
                    <div data-aos='zoom-in'>
                      <Title className='support-team'>
                        <img src={one} alt='' />
                      </Title>
                      <Title level={4}>Vibrant Team</Title>
                      <Paragraph>
                        A talented workforce that works in collaboration with a
                        network of over 6000+ Professionals.
                      </Paragraph>
                    </div>
                  </Typography>
                </Card>
              </Col>
              <Col className='ant-col-sm-24 ant-col-lg-8'>
                <Card>
                  <Typography>
                    <div data-aos='zoom-in'>
                      <Title className='support-time'>
                        <img src={two} alt='' />
                      </Title>
                      <Title level={4}>24/7 Support</Title>
                      <Paragraph>
                        Get support through phone, email, mobile app or live
                        chat - 24/7, 365 days.
                      </Paragraph>
                    </div>
                  </Typography>
                </Card>
              </Col>
              <Col className='ant-col-sm-24 ant-col-lg-8'>
                <Card>
                  <Typography>
                    <div data-aos='zoom-in'>
                      <Title className='support-payment'>
                        <img src={three} alt='' />
                      </Title>
                      <Title level={4}>Secure Payment</Title>
                      <Paragraph>
                        Easily pay online with EMI payments, credit or debit
                        card, net banking, PayPal and more.
                      </Paragraph>
                    </div>
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
