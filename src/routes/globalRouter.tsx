import React from 'react';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Blogs from '../pages/Blogs';
import Products from '../pages/Products';
import Login from '../pages/Login';
import { DashboardLayout } from '../Layout';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

function globalRoutes() {
  const adminRoutes = [
    { path: 'admin', component: Dashboard },
    { path: 'admin/blogs/*', component: Blogs },
    { path: 'admin/products/*', component: Products },
    { path: 'login', component: Login, layout: null },
    { path: '*', component: NotFound, layout: null }
  ];
  return (
    <Routes>
        {adminRoutes.map((route, index) => {
          const Layout = route.layout === null ? Fragment : DashboardLayout;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
    </Routes>
  );
}

export default globalRoutes;
