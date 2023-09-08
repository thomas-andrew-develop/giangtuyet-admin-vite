import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { menus, keysOpenMenu } from './menu';

import { Layout, Menu } from 'antd';
const { Sider } = Layout;

function Sidebar() {
  const [selectMenu, setSelectMenu] = useState(['/admin']);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    setSelectMenu([location.pathname])
    keysOpenMenu.map((keyOpenMenu: string) => {
      const pathName = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
      if(pathName === keyOpenMenu){
        setOpenKeys([keyOpenMenu]);
      }
    })
  }, [location])

  

  const loadLabel = (items: object[], key: any): any => {
    return items.map((item: any) => {
      if (item.children) {
        return loadLabel(item.children, key);
      } else {
        setSelectMenu(key);
        return navigate(key, { state: item.label });
      }
    });
  };

  const handleClickMenu = (key: any) => {
    if (key === 'signout') {
      return navigate('/login');
    }
    return loadLabel(menus, key);
  };

  
  const handleOpenMenu = (keys: string[]) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    console.log('latestOpenKey',latestOpenKey);
    if (latestOpenKey && keysOpenMenu.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Sider collapsed={collapsed} collapsible onCollapse={(value) => setCollapsed(value)}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        selectedKeys={selectMenu}
        openKeys={openKeys}
        mode="inline"
        items={menus}
        onClick={({ key }) => handleClickMenu(key)}
        onOpenChange={(keys) => handleOpenMenu(keys)}
      />
    </Sider>
  );
}

export default Sidebar;
