import React from 'react';
import { Layout, Row, Col, Typography, Collapse, Anchor } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
// import DocumentComponent from './DocumentComponent';
import PricingComponent from './PricingComponent';
import {
  otherCompliancesBasic,
  otherCompliancesStandard,
  otherCompliancesPremium,
} from './PricingDetails';

const OtherCompliancesComponent = () => {
  const tab1 = [
    {
      id: 1,
      title: 'What is a Partnership Firm ?',
      details:
        'A Partnership Firm is where two or more individuals join hands to carry out a business for profit. The partners become joint business owners and carry out operations governed by the partnership deed. The regulations are minimal, which makes it a desirable option for businesses having joint owners. Moreover, in a partnership firm the partners are jointly and individually liable for debts of the firm. This form of structure is ideal if there are no/ less requirement of external funds and low risk of bad-debts. An apt example of Partnership Firm is a Consultancy firm.',
    },
    {
      id: 2,
      title: 'What are the annual compliances of Partnership firm?',
      details:
        'The annual compliances of a Partnership Firm basically include filing of income tax return. In addition to this, partnership firms are supposed to comply with TDS regulations, GST regulations, ESI regulations etc. The compliance requirement for a partnership firm varies based on the type of entity, industry, state of incorporation, number of employees and annual turnover.',
    },
    {
      id: 3,
      title: 'When do partnership firm file their GST returns ?',
      details:
        'Under the GST regime, partnership firms have to file monthly, quarterly and yearly GST Returns.',
    },
    {
      id: 4,
      title:
        'What are the basic requirements to file TDS returns for a Partnership Firm ?',
      details:
        'As per TDS rules, a partnership firm is supposed to file quarterly TDS returns, if they have a TAN and deduct tax at source.',
    },
  ];
  // const gstCases = [
  //   'Export sales or services',
  //   'Selling on E-commerce sites',
  //   'Reverse Charge',
  //   'Inter State Supply(sale outside state)',
  //   'Casual Taxable Person',
  //   'Non resident taxable person',
  //   'Input Service Distributor',
  //   'Crossing the Threshold(40lacs or 20 lacs',
  // ];
  // const GstDocument = [
  //   {
  //     id: 1,
  //     case:
  //       'An Affidavit on a Stamp Paper is to be given by all the subscribers of the Company to state their willingness to become the shareholders of the Company',
  //   },
  //   { id: 2, case: 'Proof of office address – Rental Agreement' },
  //   {
  //     id: 3,
  //     case: 'Copies of utility bills that are not older than two months',
  //   },
  //   {
  //     id: 4,
  //     case:
  //       'Copy of approval in case the proposed name of the company contains any word(s) or expression(s) that require approval from central government',
  //   },
  //   {
  //     id: 5,
  //     case:
  //       'If the proposed name is based on a registered trademark or is subject matter of an application pending for registration under the Trade Marks Act, then it is mandatory to attach the trademark registration certificate or trademark application copy',
  //   },
  //   {
  //     id: 6,
  //     case: 'NOC from the owner of the property',
  //   },
  //   {
  //     id: 7,
  //     case:
  //       'In case of subscribers/ Director does not have a DIN, it is mandatory to attach, proof of identity and address proof of the subscribers',
  //   },
  // ];
  const { Title, Paragraph } = Typography;
  const { Panel } = Collapse;
  const { Link } = Anchor;
  return (
    <React.Fragment>
      <Layout>
        <div className='gst-main'>
          <Row gutter={16}>
            <Col className='ant-col-md-8 ant-col-lg-6'>
              <Anchor className='gst-tab-link'>
                <Link
                  href='#llpCompli-reg'
                  title='Compliances For Partnership Firm, Society, Trust, NGO'
                />
                <Link href='#llpCompli-pricing' title='Pricing' />
                <Link href='#llpCompli-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='llpCompli-reg service' id='llpCompli-reg'>
                <Typography>
                  <Title>
                    Annual Compliances for Partnership Firm, Society, Trust, NGO
                  </Title>
                  <Paragraph strong>
                    A Partnership Firm is formed as a result of an association
                    of two or more persons to carry on a business in the
                    capacity of co-owners. Partnership Firms in India are
                    governed by the Indian Partnership Act 1932. Section 4 of
                    the Indian Partnership Act of 1932[1] defines partnership as
                    “the relation between person who has agreed to share profits
                    of a business carried on by all or any of them acting for
                    all.” All the partners of the firm share the profits and
                    losses in proportion of their respective owners, or as
                    agreed between them. The limitations of sole proprietorship
                    firm gave rise to Partnership firms. Further, in this blog,
                    you shall learn about the compliances involved in
                    Partnership Firms.
                  </Paragraph>
                </Typography>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='llpCompli-pricing'>
                <PricingComponent
                  dataOne={otherCompliancesBasic}
                  dataTwo={otherCompliancesStandard}
                  dataThree={otherCompliancesPremium}
                  basic='23600'
                  standard='25100'
                  premium='37100'
                />
              </div>
              {/* faq */}
              <div className='llpCompli-faq service' id='llpCompli-faq'>
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

export default OtherCompliancesComponent;
