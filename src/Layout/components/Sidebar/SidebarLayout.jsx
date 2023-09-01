import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { menus } from './menu';

import { Layout, Menu } from 'antd';
const { Sider } = Layout;

function Sidebar({ collapsed }) {
  const [selectMenu, setSelectMenu] = useState(['1']);

  const navigate = useNavigate();

  const loadLabel = (items, key) => {
    return items.map((item) => {
      if (item.children) {
        return loadLabel(item.children, key);
      } else {
        setSelectMenu(key);
        return navigate(key, { state: item.label });
      }
    });
  };

  const handleClickMenu = (key) => {
    if (key === 'signout') {
      return navigate('/login');
    }
    return loadLabel(menus, key);
  };
  return (
    <Sider collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={selectMenu}
        mode="inline"
        items={menus}
        onClick={({ key }) => handleClickMenu(key)}
      />
    </Sider>
  );
}

export default Sidebar;
