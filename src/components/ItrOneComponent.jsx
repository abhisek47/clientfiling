import React from 'react';
import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
// import PricingComponent from './PricingComponent';
import itrOneEligibility from '../assets/itrOne-eligibility.svg';
import itrOneIneligibility from '../assets/itrOne-ineligibility.svg';
import { CaretRightOutlined } from '@ant-design/icons';
import OtherServicesComponent from './OtherServicesComponent';
// import TableComponent from './TableComponent';
// import {
//   gstReturnBasic,
//   gstReturnStandard,
//   gstReturnPremium,
// } from './PricingDetails';

const ItrOneComponent = () => {
  const otherServices = [
    { id: 1, item: 'GST return', link: 'gst-return' },
    { id: 2, item: 'Income Tax return', link: 'income-tax-return' },
    { id: 3, item: 'Excise Return', link: 'excise-return' },
    { id: 4, item: 'Trademark registration', link: 'trademark-registration' },
    { id: 5, item: 'Provident Fund Registration', link: 'provident-fund' },
  ];
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
  const eligibility = [
    'If the source of income is from one house property',
    'If the source of income is from pension or salary',
    'If the source of income is from other sources',
  ];
  const ineligibility = [
    'The taxpayer whose income is more than Rs 50 lakhs',
    'Non-residents and Residents but not ordinarily resident',
    'Taxpayers who have two or more house properties',
    'Taxpayer having income under business or profession',
    'Taxpayers who have long or short-term capital gains',
    'Taxpayers whose income from agriculture means is greater than Rs. 5,000',
    'The taxpayer who claims relief for foreign taxes paid or claim double taxation relief as mentioned in section 90/90A/91.',
    'ITR 1 cannot be used by residents having any asset (including financial interest in any entity) located outside India or signing authority in any account located outside India.',
    'Form ITR-1 can no longer be filed by an individual who has brought forward/carry forward loss under the head “Income from house property.”',
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
                <Link href='#itrOne-filing' title='Income Tax Return - 1' />
                {/* <Link href='#gstr-pricing' title='Pricing' /> */}
                <Link href='#itrOne-eligibility' title='Eligibility' />
                <Link href='#itrOne-ineligibility' title='Ineligibility' />
                <Link href='#itrOne-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='itrOne-filing service' id='itrOne-filing'>
                <Typography>
                  <Title>Income Tax Return - 1</Title>
                  <Paragraph strong>
                    ITR 1 - This Form is filed by the taxpayers and the
                    individuals being a Resident (other thanNot Ordinarily
                    Resident) having Total Income up to INR 50 lakhs, having
                    Income from Salaries, One House Property, Other Sources
                    (Interest etc.), and Agricultural Income up to INR 5
                    thousand. (Not for an Individual who is either Director in a
                    company or has invested in Unlisted Equity Shares).
                  </Paragraph>
                </Typography>
              </div>
              {/* Pricing info */}
              {/* <div className='pricing service' id='gstr-pricing'>
                <PricingComponent
                  dataOne={gstReturnBasic}
                  dataTwo={gstReturnStandard}
                  dataThree={gstReturnPremium}
                  basic='2899'
                  standard='4899'
                  premium='6899'
                />
              </div> */}
              {/* itrOne eligibility */}
              <div
                className='itrOne-eligibility service'
                id='itrOne-eligibility'>
                <Title>Eligibility to file ITR-1</Title>
                <Paragraph strong>
                  ITR-1 is filed by the taxpayers whose income is up to Rs 50
                  lakhs from below- mentioned sources:
                </Paragraph>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <List
                      dataSource={eligibility}
                      renderItem={(item) => (
                        <List.Item>
                          <Text>{item}</Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img src={itrOneEligibility} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* itrOne ineligibility */}
              <div
                className='itrOne-ineligibility service'
                id='itrOne-ineligibility'>
                <Title> Ineligibility to file ITR-1</Title>
                <Paragraph strong>
                  ITR-1 is filed by the taxpayers whose income is up to Rs 50
                  lakhs from below- mentioned sources:
                </Paragraph>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img src={itrOneIneligibility} alt='gstr-cases' />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <List
                      dataSource={ineligibility}
                      renderItem={(item) => (
                        <List.Item>
                          <Text>{item}</Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
              </div>
              {/* faq */}
              <div className='itrOne-faq service' id='itrOne-faq'>
                <Title className='faq-head'>Frequently Asked Questions</Title>
                <Row gutter={24} align='middle'>
                  <Col className='ant-col-sm-24 ant-col-lg-16'>
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
                  </Col>
                  <Col className='ant-col-sm-24 ant-col-lg-8'>
                    <OtherServicesComponent services={otherServices} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default ItrOneComponent;
