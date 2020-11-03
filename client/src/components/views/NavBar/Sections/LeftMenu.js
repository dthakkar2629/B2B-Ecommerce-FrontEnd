import React from 'react';
import { Menu } from 'antd';
import { Form, Icon, Input, Button, Row, Col, } from 'antd';

import SearchIcon from '@material-ui/icons/Search';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="search1">
        <input style={{ borderRadius: '2rem', width: '400px' }} type="text" placeholder="Search" />
        <button style={{ background: '#ffffff' }}><SearchIcon /> </button>
      </Menu.Item>
      <Menu.Item key="search2">
        <a href="/image">
          <button style={{ background: '#ffffff' }}><CameraAltIcon /></button>
        </a>
      </Menu.Item>

      <Menu.Item key="blank">
        <a href="/">Your Orders</a>
      </Menu.Item>

    </Menu>
  )
}

export default LeftMenu