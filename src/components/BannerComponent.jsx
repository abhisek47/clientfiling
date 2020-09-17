import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import ProgressiveImage from 'react-progressive-image-loading';

const BannerComponent = ({ head, para, btn, img, goTo }) => {
  const { Content } = Layout;
  const { Title, Text } = Typography;
  return (
    <React.Fragment>
      <Layout>
        <Content style={{ background: '#e2f3f5' }}>
          <div className='banner-container'>
            <Row gutter={16} align='middle'>
              <Col className='ant-col-sm-24 ant-col-md-12'>
                <Typography>
                  <div>
                    <Title>{head}</Title>
                    <Text strong>{para}</Text>
                    {/* <div className='get-btn'>
                      <Link to='/login'>
                        <Button size='large' type='primary'>
                          {btn}
                        </Button>
                      </Link>
                    </div> */}
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
