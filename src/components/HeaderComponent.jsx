import React, { Component } from 'react';
import { Layout, Menu, Button } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import DrawerComponent from './DrawerComponent';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
  render() {
    const { Header } = Layout;
    return (
      <React.Fragment>
        <Layout className='layout'>
          <Header>
            <div className='logo'>
              <Link to='/'>Client Filing India</Link>
            </div>
            <div className='navbar'>
              <Menu theme='dark' mode='horizontal' defaultSelectedKeys={[0]}>
                <Menu.Item key='1'>Company</Menu.Item>
                <Menu.Item key='2'>Property</Menu.Item>
                <Menu.Item key='3'>
                  <Link to='/gst'>GST</Link>
                </Menu.Item>
                <Menu.Item key='4'>
                  <Link to='/income-tax-return-1'>Income Tax</Link>
                </Menu.Item>
                <Menu.Item key='5'>Compliances</Menu.Item>
                <Menu.Item key='6'>Resources</Menu.Item>
              </Menu>
            </div>
            <div className='action'>
              <a href='tel:+91-983-294-9193'>
                <Button
                  type='primary'
                  icon={<PhoneOutlined rotate={90} />}
                  className='call'>
                  +91-983-294-9193
                </Button>
              </a>
            </div>
            <div className='collapse-menu'>
              <DrawerComponent />
            </div>
          </Header>
        </Layout>
      </React.Fragment>
    );
  }
}

export default HeaderComponent;
