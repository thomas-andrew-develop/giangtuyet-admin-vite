import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb, Layout } from 'antd';
import clsx from 'clsx';

import Header from '../components/Header/HeaderLayout';
import Footer from '../components/Footer/FooterLayout';
import Sidebar from '../components/Sidebar/SidebarLayout';
const { Content } = Layout;

function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const items = [];
  location.pathname.split('/').map((name) => {
    if (name) {
      return items.push({ title: name });
    }
    return null;
  });

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sidebar collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} />
      <Layout>
        <Header />
        <Content className={clsx('py-24', 'px-16', 'm-24', 'background-white')}>
          <Breadcrumb items={items} className="text-capitalize mb-30" />
          {children}
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
