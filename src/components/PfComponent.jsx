import React from 'react';
import { Layout, Row, Col, Typography, Collapse, Card, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import { CaretRightOutlined } from '@ant-design/icons';
import { pfBasic, pfStandard, pfPremium } from './PricingDetails';
import pfDocs from '../assets/pf-docs.svg';
import DocumentComponent from './DocumentComponent';
import Slider from 'react-slick';

class PfComponent extends React.Component {
  render() {
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
    const employee = [
      {
        id: 1,
        case: 'Full-time employees',
        des:
          'Studies show that staffers who work from home are more productive than those who work in a typical office environment.',
      },
      {
        id: 2,
        case: 'Part-Time Employees',
        des:
          'A part-time job is a form of employment that carries fewer hours per week than a full-time job.',
      },
      {
        id: 3,
        case: 'Employees Working at Home',
        des:
          'A full-time job is employment in which a person works a minimum number of hours defined as such by their employer.',
      },
      {
        id: 4,
        case: 'Contract Employees',
        des:
          'A contract employee is an individual retained by a company for a predetermined time, for a predetermined price.',
      },
      {
        id: 5,
        case: 'Full-time Consultants',
        des:
          'A contract employee is an individual retained by a company for a predetermined time, for a predetermined price.',
      },
    ];
    const pfregType = [
      {
        id: 1,
        case: 'Compulsary Registration',
        des:
          ' The establishment employing 20 or more employees is required to obtain registration with PF department within 30 days of reaching that number. This number is irrespective of salary.',
      },
      {
        id: 2,
        case: 'Voluntary Registration',
        des:
          'The employer with the consent of its employee can also seek optional coverage for its establishment so that their employees avail the benefit of the provident fund.',
      },
      {
        id: 3,
        case: 'PF Registration',
        des:
          ' As the PF registration is required only when the number of employees reaches 20, hence ESIC registration is also necessary as is required to be obtained when the number of employee reaches 10.',
      },
    ];
    const PfDocument = [
      { id: 1, case: 'Pan card of Establishment' },
      { id: 2, case: 'Certificate of Incorporation' },
      {
        id: 3,
        case: 'Canceled cheque of Establishment',
      },
      {
        id: 4,
        case:
          'Address Proof of establishment (Rent agreement, Water/ Electricity / Telephone Bill in the name of establishment)',
      },
      {
        id: 5,
        case: 'Specimen signature of Directors and Authorised Signatories',
      },
      {
        id: 6,
        case:
          'Consent of Majority of Employees in case of voluntary registration',
      },
      {
        id: 7,
        case: 'Digital Signature of Authorized Applicant (Class-2)',
      },
    ];
    const { Title, Paragraph } = Typography;
    const { Panel } = Collapse;
    const { Link } = Anchor;
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      arrows: true,
      slidesToScroll: 4,
      autoplay: true,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <React.Fragment>
        <Layout>
          <div className='gst-main'>
            <Row gutter={16}>
              <Col className='ant-col-md-8 ant-col-lg-6'>
                <Anchor className='gst-tab-link'>
                  <Link href='#pf-filing' title='Provident Fund' />
                  <Link href='#pf-pricing' title='Pricing' />
                  <Link href='#pf-docs' title='Document Required' />
                  <Link href='#pf-employee' title='Employee' />
                  <Link href='#pf-type' title='Registration Type' />
                  <Link href='#pf-faq' title='FAQ' />
                </Anchor>
              </Col>
              <Col className='ant-col-md-16 ant-col-lg-18'>
                {/* registration info */}
                <div className='pf-filing service' id='pf-filing'>
                  <Typography>
                    <Title>Employees Provident Fund Registration</Title>
                    <Paragraph strong>
                      Establishment Registration with Employers Provident Fund
                      Organisation (EPFO) is mandatory if the number of
                      employees exceeds 20 and may be obtained voluntarily if
                      the employee’s number is less than twenty. Our dedicated
                      team will help you to your company with EPFO
                    </Paragraph>
                  </Typography>
                </div>
                {/* Pricing info */}
                <div className='pricing service' id='pf-pricing'>
                  <PricingComponent
                    dataOne={pfBasic}
                    dataTwo={pfStandard}
                    dataThree={pfPremium}
                    basic='8000'
                    standard='15000'
                    premium='26000'
                  />
                </div>
                {/* documents */}
                <div className='pf-docs service' id='pf-docs'>
                  <Row gutter={14} align='middle'>
                    <Col className='ant-col-lg-12 ant-col-sm-24'>
                      <DocumentComponent
                        title='Documents Required for Provident Fund Registration'
                        documents={PfDocument}
                      />
                    </Col>
                    <Col className='ant-col-lg-12 ant-col-sm-24'>
                      <img src={pfDocs} alt='gstr-cases' />
                    </Col>
                  </Row>
                </div>
                {/* meaning of emoloyee */}
                <div className='pf-employee service' id='pf-employee'>
                  <Title>Meaning of Employee</Title>
                  <Slider {...settings}>
                    {employee.map((items) => (
                      <Card key={items.id}>
                        <Title level={4}>{items.case}</Title>
                        <Paragraph>{items.des}</Paragraph>
                      </Card>
                    ))}
                  </Slider>
                </div>
                {/* Registration type */}
                <div className='pf-type service' id='pf-type'>
                  <Title>Type of Registration</Title>
                  <Row gutter={16} align='middle'>
                    {pfregType.map((items) => (
                      <Col
                        className='ant-col-lg-8 ant-col-sm-24'
                        key={items.id}>
                        <Card hoverable>
                          <Title level={4}>{items.case}</Title>
                          <Paragraph>{items.des}</Paragraph>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
                {/* faq */}
                <div className='pf-faq service' id='pf-faq'>
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
  }
}

export default PfComponent;
