import React from 'react';
import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import tdrenewalRequired from '../assets/tdrenewal-required.svg';
import tdrenewalDocs from '../assets/tdrenewal-docs.svg';
import {
  CaretRightOutlined,
  CheckCircleFilled,
  EditFilled,
} from '@ant-design/icons';
import DocumentComponent from './DocumentComponent';
// import TableComponent from './TableComponent';
import {
  tmrenewBasic,
  tmrenewStandard,
  tmrenewPremium,
} from './PricingDetails';

const TdrenewalComponent = () => {
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
    'This form can be filed on or before 6(six) months from the date of expiration of 10 years.',
    'If no application for renewal is made within one or three months beforeexpiration, the registrar shall send a notice to the owner regarding renewal purpose.A trademark cannot be ceased unless a notice has been served. Governmental fee for renewal along with FORM(TM - 12) is to be submitted.',
    'In case the owner forgets to renew the trademark by the expiration person and the mark expires.The owner can apply for restoration of the trademark by filing FORM(TM- 13).He can do so, from six months to one year after the expiration of such registration.',
    'After receiving the application for either renew or restoring, the Registrar shall advertise the mark and wait for objections if raised.',
    'After the expiry of a waiting period, if no objection raised, once again the mark will be entered into the journal.',
  ];
  const tmrenewalDocument = [
    { id: 1, case: 'Copy of the Registration Certificate' },
    { id: 2, case: 'Power of Attorney' },
    { id: 3, case: 'Identity proof of the Applicant' },
    { id: 4, case: 'Address of the Applicant' },
    { id: 5, case: 'A Copy of TM-1 Form' },
    { id: 6, case: 'A Renewal Application made in TM-12 Form' },
    { id: 7, case: 'Duly filled Form-18' },
    { id: 8, case: 'A Government Fees of appropriate amount' },
    {
      id: 9,
      case: 'Trade licence for individuals',
    },
    { id: 10, case: 'PAN card,coi , moa , aoa in case of company' },
    { id: 11, case: 'PAN card and deed in case of partnership' },
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
                <Link href='#tmrenewal-filing' title='Trademark Renewal' />
                <Link href='#tmrenewal-pricing' title='Pricing' />
                <Link href='#tmrenewal-eligibility' title='Eligibility' />
                <Link href='#tmrenewal-docs' title='Document Required' />
                <Link href='#tmrenewal-proceduer' title='Procudure' />
                <Link href='#tmrenewal-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='tmrenewal-filing service' id='tmrenewal-filing'>
                <Typography>
                  <Title>Trademark Renewal</Title>
                  <Paragraph strong>
                    The registration of a trademark is valid only for a period
                    of 10 years. After which, it can be renewed from time to
                    time. Trademark renewal preserves those rights which are
                    only available to a registered mark. In case the proprietor
                    fails to renew the trademark, then he shall lose all the
                    protection that comes along with registration. For example,
                    a registered trademark has the benefit of the legal
                    presumption of ownership. That means that the burden of
                    proof is on others to try and disprove your ownership.
                  </Paragraph>
                </Typography>
              </div>
              {/* Pricing info */}
              <div
                className='tmrenewal-pricing pricing service'
                id='tmrenewal-pricing'>
                <PricingComponent
                  dataOne={tmrenewBasic}
                  dataTwo={tmrenewStandard}
                  dataThree={tmrenewPremium}
                  basic='2360'
                  standard='2360'
                  premium='2360'
                />
              </div>
              {/* #trademark eligibility */}
              <div
                className='tmrenewal-eligibility service'
                id='tmrenewal-eligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>
                      Trademark lasts for 10 years and after the expiry of 10
                      years period it may lapse,if not renewed.
                    </Title>
                    <Paragraph strong>
                      For renewal, you need to fill a form (TM-12).
                    </Paragraph>
                    <List
                      dataSource={eligibility}
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
                    <img src={tdrenewalRequired} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* documents */}
              <div className='tmrenewal-docs service' id='tmrenewal-docs'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img
                      src={tdrenewalDocs}
                      alt='gstr-cases'
                      className='hide'
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <DocumentComponent
                      title='Documents Required for Renewal Trademark'
                      documents={tmrenewalDocument}
                    />
                  </Col>
                </Row>
              </div>
              {/* benefits */}
              <div
                className='tmrenewal-proceduer service'
                id='tmrenewal-proceduer'>
                <Title>Trademark can be renewed in two ways</Title>
                <Paragraph strong>
                  <Text className='emoji softcopy'>
                    <EditFilled />
                  </Text>
                  Renew your trademark for changing any sign or word in the
                  existing mark
                </Paragraph>
                <Paragraph strong>
                  <Text className='emoji softcopy'>
                    <EditFilled />
                  </Text>
                  Renew your trademark without any change
                </Paragraph>
              </div>
              {/* faq */}
              <div className='tmrenewal-faq service' id='tmrenewal-faq'>
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

export default TdrenewalComponent;
