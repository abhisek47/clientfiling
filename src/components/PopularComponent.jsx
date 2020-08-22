import React, { Component } from 'react';
import { Layout, Row, Col, Card, Typography, Button } from 'antd';
import serviceOne from '../assets/services_1.jpg';
import serviceTwo from '../assets/services_2.jpg';
import serviceThree from '../assets/services_3.jpg';
import serviceFour from '../assets/services_4.jpg';
import { Link } from 'react-router-dom';
import { TagsFilled } from '@ant-design/icons';

class PopularComponent extends Component {
  render() {
    const { Meta } = Card;
    return (
      <React.Fragment>
        <Layout>
          <div className='container'>
            <div className='popular-entities'>
              <Typography.Title>
                We Provide Multi Professional Services
              </Typography.Title>
              <Row gutter={16}>
                <Col className='ant-col-sm-24 ant-col-lg-6'>
                  <Card
                    hoverable
                    cover={<img alt='example' src={serviceOne} />}>
                    <Meta
                      title='GST Registration'
                      description='A company register is a register of organizations in the jurisdiction they operate under.'
                    />
                    <Link to='/gst'>
                      <Button icon={<TagsFilled />} type='primary'>
                        Buy now
                      </Button>
                    </Link>
                  </Card>
                </Col>
                <Col className='ant-col-sm-24 ant-col-lg-6'>
                  <Card
                    hoverable
                    cover={<img alt='example' src={serviceTwo} />}>
                    <Meta
                      title='Company Registration'
                      description='The Income Tax Department is a government agency undertaking direct tax collection of the Government of India.'
                    />
                    <Link to='/private-limited-company'>
                      <Button icon={<TagsFilled />} type='primary'>
                        Buy now
                      </Button>
                    </Link>
                  </Card>
                </Col>
                <Col className='ant-col-sm-24 ant-col-lg-6 '>
                  <Card
                    hoverable
                    cover={<img alt='example' src={serviceThree} />}>
                    <Meta
                      title='Income Tax Return'
                      description='The Income Tax Department is a government agency undertaking direct tax collection of the Government of India.'
                    />
                    <Link to='/income-tax-return-1'>
                      <Button icon={<TagsFilled />} type='primary'>
                        Buy now
                      </Button>
                    </Link>
                  </Card>
                </Col>

                <Col className='ant-col-sm-24 ant-col-lg-6'>
                  <Card
                    hoverable
                    cover={<img alt='example' src={serviceFour} />}>
                    <Meta
                      title='Trademark Registration'
                      description='In general, compliance means conforming to a rule, such as a specification, policy, standard or law.'
                    />
                    <Link to='/trademark'>
                      <Button icon={<TagsFilled />} type='primary'>
                        Buy now
                      </Button>
                    </Link>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

export default PopularComponent;
