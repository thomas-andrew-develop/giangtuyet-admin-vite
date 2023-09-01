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
  const privateRoutes = [
    { path: '', component: Dashboard },
    { path: 'blogs/*', component: Blogs },
    { path: 'products/*', component: Products },
    { path: '*', component: NotFound },
  ];
  return (
    <Routes>
      <Route path="/admin">
        {privateRoutes.map((route, index) => {
          const Layout = route.layout === null ? Fragment : DashboardLayout;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              title={route.title}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default globalRoutes;
