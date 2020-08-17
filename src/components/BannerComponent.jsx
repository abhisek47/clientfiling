import React from 'react';
import { Layout, Typography, Button, Row, Col } from 'antd';
// import ProgressiveImage from 'react-progressive-image-loading';

const BannerComponent = ({ head, para, btn, img }) => {
  const { Content } = Layout;
  const { Title, Text } = Typography;
  return (
    <React.Fragment>
      <Layout>
        <Content>
          <div className='banner-container'>
            <Row gutter={16} align='middle'>
              <Col className='ant-col-sm-24 ant-col-md-12'>
                <Typography>
                  <Title>{head}</Title>
                  <Text strong>{para}</Text>
                  <div className='get-btn'>
                    <Button size='large' type='primary'>
                      {btn}
                    </Button>
                  </div>
                </Typography>
              </Col>
              <Col className='ant-col-sm-24 ant-col-md-12'>
                {/* <ProgressiveImage
                  preview={img}
                  src={img}
                  transitionTime={500}
                  transitionFunction='ease'
                  render={(src, style) => (
                    <img src={src} alt='banner' style={style} />
                  )}
                /> */}
                <img src={img} alt='banner' />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default BannerComponent;
