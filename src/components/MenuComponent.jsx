import React from 'react';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  DatabaseOutlined,
  AppstoreAddOutlined,
  CompassOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class MenuComponent extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(
      (key) => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (
      <Menu
        mode='inline'
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: '100%' }}>
        <SubMenu
          key='sub1'
          title={
            <span>
              <MailOutlined />
              <span>Company</span>
            </span>
          }>
          <Menu.Item key='1'>Proprietorship Firm Registration</Menu.Item>
          <Menu.Item key='2'>Registered Partnership</Menu.Item>
          <Menu.Item key='3'>Unregistered Partnership</Menu.Item>
          <Menu.Item key='4'>Limited Liability Partnership</Menu.Item>
          <Menu.Item key='5'>Private Limited Company</Menu.Item>
          <Menu.Item key='6'>Public Limited Company</Menu.Item>
        </SubMenu>
        <SubMenu
          key='sub2'
          icon={<AppstoreOutlined />}
          title='Intellectual Property'>
          <Menu.Item key='7'>
            <Link to='/trademark'>Trademark Registration</Link>
          </Menu.Item>
          <Menu.Item key='8'>
            <Link to='/trademark-renewal'>Trademark Renewal</Link>
          </Menu.Item>
          <Menu.Item key='9'>Copyright Registration</Menu.Item>
        </SubMenu>
        <SubMenu title='Goods and Services Tax' icon={<PieChartOutlined />}>
          <Menu.Item key='10'>
            <Link to='/gst'>GST Registration</Link>
          </Menu.Item>
          <Menu.Item key='11'>
            <Link to='/gst-return'>GST Return Filing</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key='sub3' icon={<SettingOutlined />} title='Income Tax'>
          <Menu.Item key='12'>
            <Link to='/income-tax-return-1'>Income Tax Return - 1</Link>
          </Menu.Item>
          <Menu.Item key='13'>
            <Link to='/income-tax-return-2'>Income Tax Return - 2</Link>
          </Menu.Item>
          <Menu.Item key='14'>
            <Link to='/income-tax-return-3'>Income Tax Return - 3</Link>
          </Menu.Item>
          <Menu.Item key='15'>
            <Link to='/income-tax-return-4'>Income Tax Return - 4</Link>
          </Menu.Item>
          <Menu.Item key='16'>
            <Link to='/income-tax-return-5'>Income Tax Return - 5</Link>
          </Menu.Item>
          <Menu.Item key='17'>
            <Link to='/income-tax-return-6'>Income Tax Return - 6</Link>
          </Menu.Item>
          <Menu.Item key='18'>
            <Link to='/income-tax-return-7'>Income Tax Return - 7</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key='sub4'
          icon={<DatabaseOutlined />}
          title='Annual Compliances'>
          <Menu.Item key='19'>Private Limited Company</Menu.Item>
          <Menu.Item key='20'>LLP Annual Partnership</Menu.Item>
          <Menu.Item key='21'>Import Export Code</Menu.Item>
          <Menu.Item key='22'>ISO Registration</Menu.Item>
        </SubMenu>
        <SubMenu key='sub5' icon={<CompassOutlined />} title='Payroll'>
          <Menu.Item key='23'>PF Registration</Menu.Item>
          <Menu.Item key='24'>PF Return Filing</Menu.Item>
          <Menu.Item key='25'>ESI Registration</Menu.Item>
          <Menu.Item key='26'>ESI Return Filing</Menu.Item>
        </SubMenu>
        <SubMenu key='sub6' icon={<AppstoreAddOutlined />} title='Others'>
          <Menu.Item key='27'>Society Registration</Menu.Item>
          <Menu.Item key='28'>Trust Registration</Menu.Item>
          <Menu.Item key='29'>PAN Application</Menu.Item>
          <Menu.Item key='30'>TAN Application</Menu.Item>
          <Menu.Item key='31'>80G Registration</Menu.Item>
          <Menu.Item key='32'>
            <Link to='/tds-return'>TDS Return Filing</Link>
          </Menu.Item>
          <Menu.Item key='33'>Excise Return Filing</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default MenuComponent;
