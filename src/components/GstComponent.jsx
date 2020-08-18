import React from 'react';
import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import gstCase from '../assets/gstCases.svg';
import { CaretRightOutlined, CheckCircleFilled } from '@ant-design/icons';
import DocumentComponent from './DocumentComponent';
import PricingComponent from './PricingComponent';
import { gstBasic, gstStandard, gstPremium } from './PricingDetails';

const GstComponent = () => {
  const tab1 = [
    {
      id: 1,
      title: 'How to get a company registered ?',
      details:
        'Picking the right company structure for your business is as important as any other business-related activity. The right business structure will allow your enterprise to operate efficiently and meet your required business targets. In India, every business must register themselves as part of the mandatory legal compliance. Before we learn how to register a company, let’s try and understand the types of business structures in India.',
    },
    {
      id: 2,
      title: 'What is trademark registration ?',
      details:
        'A trademark is a type of intellectual property consisting of a recognizable sign, design, or expression which identifies products or services of a particular source from those of others, although trademarks used to identify services are usually called service marks.',
    },
    {
      id: 3,
      title: 'What is import export code registration ?',
      details:
        'In this age of cut- throat competition, everyone wants to grow their business beyond the limits of the domestic market.However, doing business globally isn’t just a cup of tea for everyone.Before going global, you need to follow several procedures and laws in place and get different registration and license.IEC(Import Export Code) license is one of such prerequisite when you’re thinking of importing or exporting from India.',
    },
  ];
  const gstCases = [
    'Export sales or services',
    'Selling on E-commerce sites',
    'Reverse Charge',
    'Inter State Supply(sale outside state)',
    'Casual Taxable Person',
    'Non resident taxable person',
    'Input Service Distributor',
    'Crossing the Threshold(40lacs or 20 lacs',
  ];
  const GstDocument = [
    { id: 1, case: 'PAN card and document scan copy' },
    { id: 2, case: 'Tradelicence, incorporation deed, partnership deed' },
    {
      id: 3,
      case:
        'Adress proof like electric bill, telephone bil, rent Agreement, property document etc',
    },
    { id: 4, case: 'Others like-noc, authorisation letter, bank statement' },
  ];
  const { Title, Paragraph, Text } = Typography;
  const { Panel } = Collapse;
  const { Link } = Anchor;
  return (
    <React.Fragment>
      <Layout>
        <div className='gst-main'>
          <Row gutter={16}>
            <Col className='ant-col-md-8 ant-col-lg-6'>
              <Anchor className='gst-tab-link'>
                <Link href='#gst-reg' title='GST Registration' />
                <Link href='#gst-pricing' title='Pricing' />
                <Link href='#gst-cases' title='Eligibility' />
                <Link href='#gst-docs' title='Documents required' />
                <Link href='#gst-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='gst-reg service' id='gst-reg'>
                <Typography>
                  <Title>What is GST Registration</Title>
                  <Paragraph strong>
                    GST Number (GSTIN) is a unique 15 digit number which is
                    allotted to the assessed at the time of filing an
                    application for registration for Goods &amp; Service Tax.
                  </Paragraph>
                  <Paragraph strong>
                    As per the GST law, every person (including company, LLP
                    etc) has to register under GST if the total turnover crosses
                    Rs.40 lakh (Rs.20 lakh in case of north eastern states).
                    Hence, if your turnover is more than 40 lakh or is going to
                    be more than 20 lakh, then it is advised that you should go
                    for GST registration.
                  </Paragraph>
                </Typography>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='gst-pricing'>
                <PricingComponent
                  dataOne={gstBasic}
                  dataTwo={gstStandard}
                  dataThree={gstPremium}
                  basic='3500'
                  standard='3500'
                  premium='3500'
                />
              </div>
              {/* mandatory cases */}
              <div className='gst-cases service' id='gst-cases'>
                <Title>When GST Registration is mandatory ?</Title>
                <Paragraph strong>
                  In below all cases registration is mandatory .
                </Paragraph>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <List
                      dataSource={gstCases}
                      renderItem={(item) => (
                        <List.Item>
                          <Text>
                            <span className='emoji check'>
                              <CheckCircleFilled />
                            </span>
                            {item}
                          </Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img src={gstCase} alt='gst-cases' />
                  </Col>
                </Row>
              </div>
              {/* documents */}
              <div className='gst-docs service' id='gst-docs'>
                <DocumentComponent
                  documents={GstDocument}
                  title='Documents required for gst registration'
                />
              </div>
              {/* faq */}
              <div className='gst-faq service' id='gst-faq'>
                <Title className='faq-head'>Frequently Asked Questions</Title>
                <Collapse
                  bordered={false}
                  defaultActiveKey={['1']}
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                  className='site-collapse-custom-collapse'>
                  {tab1.map((tab) => (
                    <Panel
                      header={tab.title}
                      key={tab.id}
                      className='site-collapse-custom-panel'>
                      <p>{tab.details}</p>
                    </Panel>
                  ))}
                </Collapse>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default GstComponent;
