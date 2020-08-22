import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import director from '../assets/chief@2x.png';
import AOS from 'aos';

const QuotesComponent = () => {
  const { Title, Paragraph, Text } = Typography;
  AOS.init();
  return (
    <React.Fragment>
      <Layout className='quotes'>
        <div className='container'>
          <Row gutter={16} align='middle'>
            <Col className='ant-col-sm-24 ant-col-lg-16'>
              <Typography>
                <div data-aos='fade-up' data-aos-duration='1000'>
                  <Title className='quotes-head'>PAN India Services</Title>
                </div>
                <div data-aos='fade-up' data-aos-duration='1000'>
                  <Paragraph className='quotes-para'>
                    we have over 8+ years of corporate and consulting experience
                    with top firms. Our network includes experienced Chartered
                    Accountants, Company Secretaries, Lawyers, Cost Accountants
                    and many more. We help in startup compliance and assists in
                    ROC filing, GST filing, incometax filing, and assist in
                    geeting various certificates like IPR, fssai, IEC etc . We
                    help and assist client in legal compliances - “ give a-the
                    burden of compliance to us for ease of focusing on business
                    ”
                  </Paragraph>
                </div>
                <div data-aos='fade-up' data-aos-duration='1000'>
                  <Paragraph strong className='ceo'>
                    Uday Choudhary
                  </Paragraph>
                  <Text>Chief executive officer</Text>
                </div>
              </Typography>
            </Col>
            <Col className='ant-col-sm-24 ant-col-lg-8'>
              <div
                data-aos='fade-zoom-in'
                data-aos-easing='ease-in-back'
                data-aos-delay='300'
                data-aos-offset='0'>
                <img src={director} className='director-img' alt='director' />
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default QuotesComponent;
