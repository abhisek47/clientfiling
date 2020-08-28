import React from 'react';
import { Layout, Typography, Button, Row, Col } from 'antd';
import AOS from 'aos';
import ProgressiveImage from 'react-progressive-image-loading';
import { Link } from 'react-router-dom';
import ReactFloaterJs from 'react-floaterjs';

const BannerComponent = ({ head, para, btn, img, goTo }) => {
  const { Content } = Layout;
  const { Title, Text } = Typography;
  AOS.init();
  return (
    <React.Fragment>
      <Layout>
        <Content style={{ background: '#D8EFEF' }}>
          <div className='banner-container'>
            <Row gutter={16} align='middle'>
              <Col className='ant-col-sm-24 ant-col-md-12'>
                <Typography>
                  <div data-aos='fade-up' data-aos-duration='1000'>
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
                <ReactFloaterJs>
                  <div
                    data-aos='fade-zoom-in'
                    data-aos-easing='ease-in-back'
                    data-aos-delay='300'
                    data-aos-offset='0'>
                    <ProgressiveImage
                      preview={img}
                      src={img}
                      transitionTime={500}
                      transitionFunction='ease'
                      render={(src, style) => (
                        <img src={src} alt='banner' style={style} />
                      )}
                    />
                  </div>
                </ReactFloaterJs>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default BannerComponent;
