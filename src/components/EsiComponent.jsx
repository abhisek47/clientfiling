import React from 'react';
import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import EsiBenefits from '../assets/esi-benefits.svg';
import EsiEntities from '../assets/esi-entities.svg';
import { CaretRightOutlined, CheckCircleFilled } from '@ant-design/icons';
import DocumentComponent from './DocumentComponent';
import PricingComponent from './PricingComponent';
import { esiBasic, esiStandard, esiPremium } from './PricingDetails';

const EsiComponent = () => {
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
  const esiBenefits = [
    'Sickness benefits at the rate of 70% (in the form of salary), in case of any certified illness certified and which lasts for a maximum of 91 days in any year',
    'Medical Benefits to an employee and his family members',
    'Maternity Benefit to the women who are pregnant (paid leaves)',
    'If the death of the employee happens while on work – 90% of salary is given to his dependents every month after the death of the employee',
    'Same as above in case of disability of the employee',
    'Funeral expenses',
    'Old age care medical expenses',
  ];
  const esiDocument = [
    {
      id: 1,
      case:
        'A registration certificate obtained either under the: a. Factories Act b.Shops and Establishment Act',
    },
    {
      id: 2,
      case:
        'Certificate of Registration in case of Company, and Partnership deed in case of a Partnership',
    },
    {
      id: 3,
      case:
        'Memorandum of Association and Articles of Association of the Company',
    },
    { id: 4, case: 'A list of all the employees working in the Establishment' },
    {
      id: 5,
      case:
        'PAN Card of the Business Entity as well as all the Employees working under the entity',
    },
    { id: 6, case: 'The compensation details of all the employees' },
    { id: 7, case: 'A cancelled cheque of the Bank Account of the Company' },
    { id: 8, case: 'List of Directors of the Company' },
    { id: 9, case: 'List of the Shareholders of the Company' },
    {
      id: 10,
      case: 'Register containing the attendance of the employees',
    },
  ];
  const esiEntities = [
    'Shops',
    'Restaurants or Hotels only engaged in sales.',
    'Cinemas',
    'Road Motor Transport Establishments',
    'Newspaper establishments.(which is not covered under the factory act)',
    'Private Educational Institutions',
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
                <Link href='#esi-reg' title='ESI Registration' />
                <Link href='#esi-pricing' title='Pricing' />
                <Link href='#esi-benefits' title='Benefits' />
                <Link href='#esi-docs' title='Documents required' />
                <Link href='#esi-entities' title='Entities' />
                <Link href='#esi-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='esi-reg service' id='esi-reg'>
                <Typography>
                  <Title>Employees State Insurance Registration</Title>
                  <Paragraph strong>
                    ESI stands for Employee State Insurance managed by the
                    Employee State Insurance Corporation which is an autonomous
                    body created by the law under the Ministry of Labour and
                    Employment, Government of India. This scheme is started for
                    Indian workers.  Under this scheme, the workers are provided
                    with a huge variety of medical, monetary and other benefits
                    by the employer. Any Company having more than 10 employees
                    (in some states it is 20 employees) who have the maximum
                    salary of Rs. 15000/- has to mandatorily register itself
                    with the ESIC.
                  </Paragraph>
                  <Paragraph strong>
                    Under this scheme, the employer needs to contribute an
                    amount of 4.75% of the total monthly salary payable to the
                    employee whereas the employer needs to contribute only 1.75%
                    of his monthly salary every month of the year. The only
                    exemption to the employee in paying his contribution is
                    whose salary is less than Rs. 100/- per day.
                  </Paragraph>
                </Typography>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='esi-pricing'>
                <PricingComponent
                  dataOne={esiBasic}
                  dataTwo={esiStandard}
                  dataThree={esiPremium}
                  basic='8000'
                  standard='15000'
                  premium='26000'
                />
              </div>
              {/* mandatory cases */}
              <div className='esi-benefits service' id='esi-benefits'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>What are the benefits of ESI registration ?</Title>
                    <Paragraph strong>
                      The benefits of registering under this scheme are varied.
                      Some of them are:
                    </Paragraph>
                    <List
                      dataSource={esiBenefits}
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
                    <img src={EsiBenefits} alt='esi-cases' />
                  </Col>
                </Row>
              </div>
              {/* documents */}
              <div className='esi-docs service' id='esi-docs'>
                <DocumentComponent
                  documents={esiDocument}
                  title='Documents Required for ESI Registration'
                />
              </div>
              {/* mandatory cases */}
              <div className='esi-entities service' id='esi-entities'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img src={EsiEntities} alt='esi-cases' />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Which are the entities covered by the ESI ?</Title>
                    <Paragraph strong>
                      As per the government notification dated Sec 1(5) of the
                      ESI Act the following entities are covered:
                    </Paragraph>
                    <List
                      dataSource={esiEntities}
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
                </Row>
              </div>
              {/* faq */}
              <div className='esi-faq service' id='esi-faq'>
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

export default EsiComponent;
