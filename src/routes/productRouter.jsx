import React from 'react';
import ProductsList from '../pages/Products/ProductsList';
import ProductAdd from '../pages/Products/ProductAdd';
import CategoriesProduct from '../pages/Products/CategoriesProduct';
import CategoryProductAdd from '../pages/Products/CategoriesProduct/CategoryProductAdd';
import { Routes, Route } from 'react-router-dom';

function productRoutes() {
  const blogsRoutes = [
    { path: ':id', component: ProductAdd },
    { path: 'add', component: ProductAdd },
    { path: 'categories', component: CategoriesProduct },
    { path: 'categories/add', component: CategoryProductAdd },
    { path: 'categories/:id', component: CategoryProductAdd },
  ];
  return (
    <Routes>
      <Route index element={<ProductsList />} />
      {blogsRoutes.map((route, index) => {
        const Page = route.component;
        return <Route key={index} path={route.path} element={<Page />} title={route.title} />;
      })}
    </Routes>
  );
}

export default productRoutes;
