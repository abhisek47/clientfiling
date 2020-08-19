import React from 'react';
import { Layout, Typography, Button, Row, Col } from 'antd';
import ProgressiveImage from 'react-progressive-image-loading';

const BannerComponent = ({ head, para, btn, img }) => {
  const { Content } = Layout;
  const { Title, Text } = Typography;
  return (
    <React.Fragment>
      <Layout>
        <Content style={{ background: '#D8EFEF' }}>
          <div className='banner-container'>
            <Row gutter={16} align='middle'>
              <Col className='ant-col-sm-24 ant-col-md-12'>
                <Typography>
                  <div className='animate__animated animate__fadeInUp animate__delay-0.4s'>
                    <Title>{head}</Title>
                  </div>
                  <div className='animate__animated animate__fadeInUp animate__delay-0.4s'>
                    <Text strong>{para}</Text>
                  </div>
                  <div className='get-btn animate__animated  animate__fadeIn animate__delay-1s'>
                    <Button size='large' type='primary'>
                      {btn}
                    </Button>
                  </div>
                </Typography>
              </Col>
              <Col className='ant-col-sm-24 ant-col-md-12'>
                <ProgressiveImage
                  preview={img}
                  src={img}
                  transitionTime={500}
                  transitionFunction='ease'
                  render={(src, style) => (
                    <img src={src} alt='banner' style={style} />
                  )}
                />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default BannerComponent;
