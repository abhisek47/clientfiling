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
      title: 'When do I need to register under the GST Act ?',
      details:
        'Within 30 days from the date when your liability arose. In case of a Casual Taxpayer or Non-residen taxable person, 5 days prior to the commencement of the business',
    },
    {
      id: 2,
      title:
        'What if the dealer migrated with wrong PAN as the status of firm was changed from proprietorship to partnership ?',
      details:
        'New registration would be required as partnership firm would have new PAN.',
    },
    {
      id: 3,
      title:
        'Does aggregate turnover include value of inward supplies received on which RCM is payable ?',
      details:
        'Refer Section 2(6) of CGST Act. Aggregate turnover does not include value of inward supplies on which tax is payable on reverse charge basis.',
    },
    {
      id: 4,
      title:
        'A taxable person’s business is in many states. All supplies are below 10 Lakhs. He makes an Inter State supply from one state. Is he liable for registration ?',
      details:
        'He is liable to register if the aggregate turnover (all India) is more than 20 lacs (Rs. 10 lacs in Special Category States) or if he is engaged in inter-State supplies.',
    },
    {
      id: 5,
      title:
        'What If I am not liable to register under GST but I was registered under Service tax ?',
      details:
        'You can apply for cancellation of Provisional ID on or before 31st July 2017.',
    },
    {
      id: 6,
      title: 'What is the time limit for taking a Registration under GST ?',
      details:
        'A person should take a Registration, within thirty days from the date on which he becomes liable to registration, in such manner and subject to such conditions as is prescribed under the Registration Rules. A Casual Taxable person and a non-resident taxable person should however apply for registration at least 5 days prior to commencement of business.',
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
                <Link href='#gst-cases' title='Eligibility' />
                <Link href='#gst-docs' title='Documents required' />
                <Link href='#gst-pricing' title='Pricing' />
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
              {/* mandatory cases */}
              <div className='gst-cases service' id='gst-cases'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>When GST Registration is mandatory ?</Title>
                    <Paragraph strong>
                      In below all cases registration is mandatory .
                    </Paragraph>
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
                  title='Documents required for GST registration'
                />
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
