import React from 'react';
import {
  Layout,
  Row,
  Col,
  Typography,
  List,
  Collapse,
  Anchor,
  Card,
} from 'antd';
import EsiReturnDocs from '../assets/esi-return-docs.svg';
import EsiReturnProcess from '../assets/esi-return-process.svg';
import { CaretRightOutlined, CheckCircleFilled } from '@ant-design/icons';
import DocumentComponent from './DocumentComponent';
import PricingComponent from './PricingComponent';
import {
  esiReturnStandard,
  esiReturnPremium,
  esiReturnBasic,
} from './PricingDetails';

const esiReturnComponent = () => {
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
        'A trademark is a type of intellectual property consisting of a recognizable sign, desiReturngn, or expression which identifies products or services of a particular source from those of others, although trademarks used to identify services are usually called service marks.',
    },
    {
      id: 3,
      title: 'What is import export code registration ?',
      details:
        'In this age of cut- throat competition, everyone wants to grow their business beyond the limits of the domestic market.However, doing business globally isn’t just a cup of tea for everyone.Before going global, you need to follow several procedures and laws in place and get different registration and license.IEC(Import Export Code) license is one of such prerequisite when you’re thinking of importing or exporting from India.',
    },
  ];
  const esiReturnProcess = [
    'After verification of the form, the government will issue a 17 digit unique number.',
    'The employee who is registered under this scheme will provide the employer with the filled form and photographs of his own family members as a part of the process of registration and will get an ESI card after registration.',
    'Any change in the Company or its employees will be intimated to the ESIC.',
  ];
  const esiReturnDocument = [
    {
      id: 1,
      case: 'Register of Attendance of the Employees',
    },
    {
      id: 2,
      case: 'Form 6 – Register',
    },
    {
      id: 3,
      case: 'Register of wages',
    },
    {
      id: 4,
      case:
        'Register of any accidents which have happened on the premises of the business',
    },
    {
      id: 5,
      case: 'Monthly returns and challans',
    },
  ];
  const stepRowOne = [
    {
      id: 1,
      case: 'Getting ESI Registration',
      details:
        'Establishmentsor Factoriesmust get themselves registered within 15 days of the Act becoming applicable to them by submitting an Employer’s Registration Form(Form- 01) to the relevant Regional Office.',
    },
    {
      id: 2,
      case: 'Obtaining Code Number',
      details:
        'A 17-digit identification number called the Code number will be provided which must be used in all Correspondence relating to the Scheme.Form 3(Return on Declaration) must also be submitted along with Form 1.',
    },
    {
      id: 3,
      case: 'For Employees',
      details:
        'At the time of joining the insurable employment, employees are required to fill in aDeclaration Form(Form1) and submit two copies of a family photo to the employer, which must be submitted to the relevant ESI Branch Office by his employer.',
    },
  ];
  const stepRowTwo = [
    {
      id: 1,
      case: 'Insurance Number',
      details:
        'The employee will then be allotted an insurance number for the purpose of his identification under the scheme.',
    },
    {
      id: 2,
      case: 'Temporary Identity Card',
      details:
        'The employees will also be issued a temporary identity card for availing medical benefit for him / herself and his/ her family for a duration of three months.',
    },
    {
      id: 3,
      case: 'Permanent Photo Identity Card',
      details:
        'Thereafter, he will be provided with a permanent photo identity card. A person once registered need not register again when there is a change of employment.The same registration can be transferred from one employment to another.',
    },
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
                <Link href='#esiReturn-reg' title='ESI Return' />
                <Link href='#esiReturn-pricing' title='Pricing' />
                <Link href='#esiReturn-process' title='Process' />
                <Link href='#esiReturn-docs' title='Documents required' />
                <Link href='#esiReturn-steps' title='Steps' />
                <Link href='#esiReturn-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='esiReturn-reg service' id='esiReturn-reg'>
                <Typography>
                  <Title>Employees State Insurance Return Filing</Title>
                  <Paragraph strong>
                    Established under the ESI Act, 1948, ESIC (Employees’ State
                    Insurance Corporation) provides benefits to employees in the
                    event of their sickness, death, disablement, injury, etc.
                    The finance of this scheme comes from contributions from
                    both employees and employers. Any employee who earns a
                    monthly income of less than Rs. 21000 per month is covered
                    under this scheme. Apart from employees, the family members
                    of employees are also provided benefits under this Act. Any
                    establishment that employs 10 or more employees is mandated
                    by law to register under this Act. The contribution of
                    employers in this scheme is 4.75% and that of employees is
                    1.75%, thus making a total of 6.5%.
                  </Paragraph>
                </Typography>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='esiReturn-pricing'>
                <PricingComponent
                  dataOne={esiReturnBasic}
                  dataTwo={esiReturnStandard}
                  dataThree={esiReturnPremium}
                  basic='799'
                  standard='1499'
                  premium='8499'
                />
              </div>
              {/* ESI Return Process */}
              <div className='esiReturn-process service' id='esiReturn-process'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>What are the benefits of ESI Return Filing ?</Title>
                    <Paragraph strong>
                      The benefits of registering under this scheme are varied.
                      Some of them are:
                    </Paragraph>
                    <List
                      dataSource={esiReturnProcess}
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
                    <img src={EsiReturnProcess} alt='esiReturn-cases' />
                  </Col>
                </Row>
              </div>
              {/* documents */}
              <div className='esiReturn-docs service' id='esiReturn-docs'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img
                      src={EsiReturnDocs}
                      alt='esi-return-docs'
                      className='hide'
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <DocumentComponent
                      documents={esiReturnDocument}
                      title='Documents Required for ESI Return Filing'
                    />
                  </Col>
                </Row>
              </div>
              {/* registration steps */}
              <div className='esiReturn-steps service' id='esiReturn-steps'>
                <Title>Process of Registration</Title>
                <Row gutter={14} align='middle'>
                  {stepRowOne.map((row) => (
                    <Col className='ant-col-lg-8 ant-col-sm-24' key={row.id}>
                      <Card hoverable title={row.case}>
                        {row.details}
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Row gutter={14} align='middle'>
                  {stepRowTwo.map((row) => (
                    <Col className='ant-col-lg-8 ant-col-sm-24' key={row.id}>
                      <Card hoverable title={row.case}>
                        {row.details}
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
              {/* faq */}
              <div className='esiReturn-faq service' id='esiReturn-faq'>
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

export default esiReturnComponent;
