import React, { Component } from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import director from '../assets/chief@2x.png';

class QuotesComponent extends Component {
  render() {
    const { Title, Paragraph, Text } = Typography;

    return (
      <React.Fragment>
        <Layout className='quotes'>
          <div className='container'>
            <Row gutter={16} align='middle'>
              <Col className='ant-col-sm-24 ant-col-lg-16'>
                <Typography>
                  <Title className='quotes-head'>PAN India Services</Title>
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
                  <Paragraph strong className='ceo'>
                    Uday Choudhary
                  </Paragraph>
                  <Text>Chief executive officer</Text>
                </Typography>
              </Col>
              <Col className='ant-col-sm-24 ant-col-lg-8'>
                <img src={director} className='director-img' alt='director' />
              </Col>
            </Row>
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

export default QuotesComponent;
