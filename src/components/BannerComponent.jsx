import React from 'react';
import { Layout, Typography, Button, Row, Col } from 'antd';
import banner from '../assets/banner.svg';

const BannerComponent = () => {
  const { Content } = Layout;
  const { Title, Text } = Typography;

  return (
    <React.Fragment>
      <Layout>
        <Content>
          <div className='banner-container'>
            <Row gutter={16}>
              <Col className='ant-col-sm-24 ant-col-md-12'>
                <Typography>
                  <Title>We Are Helping Startup To Grow Their Business</Title>
                  <Text strong>
                    we have over 8+ years of corporate and consulting experience
                    with top firms. Our network includes experienced Chartered
                    Accountants, Company Secretaries, Lawyers, Cost Accountants
                    and many more.
                  </Text>
                  <div className='get-btn'>
                    <Button size='large' type='primary'>
                      Get started
                    </Button>
                  </div>
                </Typography>
              </Col>
              <Col className='ant-col-sm-24 ant-col-md-12'>
                <img src={banner} alt='' className='banner-img' />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default BannerComponent;
