import { useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb, Layout } from 'antd';
import clsx from 'clsx';

import Header from '../components/Header/HeaderLayout';
import Footer from '../components/Footer/FooterLayout';
import Sidebar from '../components/Sidebar/SidebarLayout';
const { Content } = Layout;

interface Props {
  children?: ReactNode
}

function DashboardLayout({ children }: Props) {
  const location = useLocation();
  const [itemsMenu, setItemsMenu] = useState([]);
  

  useEffect(() => {
    const items: any = [];
    location.pathname.split('/').map((name) => {
      if (name) {
        items.push({ title: name });
        setItemsMenu(items);
      }else{
        return null;
      }
    });
  }, [location])
  
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sidebar/>
      <Layout>
        <Header />
        <Content className={clsx('p-6', 'm-6', 'background-white')}>
          <Breadcrumb items={itemsMenu} className="text-capitalize mb-4" />
          {children}
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
