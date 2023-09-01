import React from 'react';
import { Outlet } from 'react-router-dom';
import { ProductRouter } from '../../routes';
import ProductsList from './ProductsList';
function Products() {
  return (
    <>
      <ProductsList />
      <ProductRouter />
      <Outlet />
    </>
  );
}

export default Products;
