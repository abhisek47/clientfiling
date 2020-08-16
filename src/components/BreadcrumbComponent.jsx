import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { Link } from 'react-router-dom';

const BreadcrumbComponent = ({ title }) => {
  return (
    <React.Fragment>
      <Layout className='breadcrumb'>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to='/'>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{title}</Breadcrumb.Item>
        </Breadcrumb>
      </Layout>
    </React.Fragment>
  );
};

export default BreadcrumbComponent;
