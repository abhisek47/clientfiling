import React, { Component } from 'react';
import { Layout, Menu, Button } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import DrawerComponent from './DrawerComponent';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class HeaderComponent extends Component {
  state = {
    current: 'mail',
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  render() {
    const { Header } = Layout;
    // const { current } = this.state;
    return (
      <React.Fragment>
        <Layout className='layout'>
          <Header>
            <div className='logo'>
              <Link to='/'>Client Filing India</Link>
            </div>
            <div className='navbar'>
              <Menu
                onClick={this.handleClick}
                // selectedKeys={[current]}
                mode='horizontal'>
                <SubMenu title='Company'>
                  <Menu.Item key='setting:1'>
                    Proprietorship Firm Registration
                  </Menu.Item>
                  <Menu.Item key='setting:2'>Registered Partnership</Menu.Item>
                  <Menu.Item key='setting:3'>
                    Unregistered Partnership
                  </Menu.Item>
                  <Menu.Item key='setting:4'>
                    Limited Liability Partnership
                  </Menu.Item>
                  <Menu.Item key='setting:5'>Private Limited Company</Menu.Item>
                  <Menu.Item key='setting:6'>Public Limited Company</Menu.Item>
                </SubMenu>
                <SubMenu title='Intellectual Property'>
                  <Menu.Item key='setting:7'>
                    <Link to='/trademark'>Trademark Registration</Link>
                  </Menu.Item>
                  <Menu.Item key='setting:8'>
                    <Link to='/trademark-renewal'>Trademark Renewal</Link>
                  </Menu.Item>
                  <Menu.Item key='setting:9'>Copyright Registration</Menu.Item>
                </SubMenu>
                <SubMenu title='GST'>
                  <Menu.Item key='setting:10'>
                    <Link to='/gst'>GST Registration</Link>
                  </Menu.Item>
                  <Menu.Item key='setting:11'>
                    <Link to='/gst-return'>GST Return Filing</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu title='Income Tax'>
                  <Menu.Item key='setting:12'>
                    <Link to='/income-tax-return-1'>Income Tax Return - 1</Link>
                  </Menu.Item>
                  <Menu.Item key='setting:13'>
                    <Link to='/income-tax-return-2'>Income Tax Return - 2</Link>
                  </Menu.Item>
                  <Menu.Item key='setting:14'>
                    <Link to='/income-tax-return-3'>Income Tax Return - 3</Link>
                  </Menu.Item>
                  <Menu.Item key='setting:15'>
                    <Link to='/income-tax-return-4'>Income Tax Return - 4</Link>
                  </Menu.Item>
                  <Menu.Item key='setting:16'>
                    <Link to='/income-tax-return-5'>Income Tax Return - 5</Link>
                  </Menu.Item>
                  <Menu.Item key='setting:17'>
                    <Link to='/income-tax-return-6'>Income Tax Return - 6</Link>
                  </Menu.Item>
                  <Menu.Item key='setting:18'>
                    <Link to='/income-tax-return-7'>Income Tax Return - 7</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu title='Annual Compliances'>
                  <Menu.Item key='setting:19'>
                    Private Limited Company
                  </Menu.Item>
                  <Menu.Item key='setting:20'>LLP Annual Partnership</Menu.Item>
                  <Menu.Item key='setting:21'>Import Export Code</Menu.Item>
                  <Menu.Item key='setting:22'>ISO Registration</Menu.Item>
                </SubMenu>
                <SubMenu title='Payroll'>
                  <Menu.Item key='setting:23'>PF Registration</Menu.Item>
                  <Menu.Item key='setting:24'>PF Return Filing</Menu.Item>
                  <Menu.Item key='setting:25'>ESI Registration</Menu.Item>
                  <Menu.Item key='setting:26'>ESI Return Filing</Menu.Item>
                </SubMenu>
                <SubMenu title='Others'>
                  <Menu.Item key='setting:27'>Society Registration</Menu.Item>
                  <Menu.Item key='setting:28'>Trust Registration</Menu.Item>
                  <Menu.Item key='setting:29'>PAN Application</Menu.Item>
                  <Menu.Item key='setting:30'>TAN Application</Menu.Item>
                  <Menu.Item key='setting:31'>80G Registration</Menu.Item>
                  <Menu.Item key='setting:32'>
                    <Link to='/tds-return'>TDS Return Filing</Link>
                  </Menu.Item>
                  <Menu.Item key='setting:33'>Excise Return Filing</Menu.Item>
                </SubMenu>
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
