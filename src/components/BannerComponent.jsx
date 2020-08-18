import React, { useRef, useEffect } from 'react';
import { Layout, Typography, Button, Row, Col } from 'antd';
import ProgressiveImage from 'react-progressive-image-loading';
import { TweenLite, Power3 } from 'gsap';

const BannerComponent = ({ head, para, btn, img }) => {
  const { Content } = Layout;
  const { Title, Text } = Typography;
  let bannerTagline = useRef(null);
  let bannerPara = useRef(null);
  let bannerImg = useRef(null);
  useEffect(() => {
    TweenLite.to(bannerTagline, 1, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
    TweenLite.to(bannerPara, 1, {
      opacity: 1,
      y: -20,
      delay: 0.6,
      ease: Power3.easeOut,
    });
    TweenLite.to(bannerImg, 1, {
      opacity: 1,
      y: -20,
      delay: 1,
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <React.Fragment>
      <Layout>
        <Content>
          <div className='banner-container'>
            <Row gutter={16} align='middle'>
              <Col className='ant-col-sm-24 ant-col-md-12'>
                <Typography>
                  <div
                    className='banner-tagline'
                    ref={(el) => {
                      bannerTagline = el;
                    }}>
                    <Title>{head}</Title>
                  </div>
                  <div
                    className='banner-para'
                    ref={(el) => {
                      bannerPara = el;
                    }}>
                    <Text strong>{para}</Text>
                  </div>
                  <div className='get-btn'>
                    <Button size='large' type='primary'>
                      {btn}
                    </Button>
                  </div>
                </Typography>
              </Col>
              <Col className='ant-col-sm-24 ant-col-md-12'>
                <div
                  className='banner-img'
                  ref={(el) => {
                    bannerImg = el;
                  }}>
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
                {/* <img src={img} alt='banner' /> */}
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default BannerComponent;
