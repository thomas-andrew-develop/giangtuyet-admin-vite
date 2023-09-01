import React from 'react';
import BlogAdd from '../pages/Blogs/BlogAdd';
import BlogsList from '../pages/Blogs/BlogsList';
import CategoriesBlog from '../pages/Blogs/CategoriesBlog';
import CategoryBlogAdd from '../pages/Blogs/CategoriesBlog/CategoryBlogAdd';
import { Routes, Route } from 'react-router-dom';

function blogRouter() {
  const blogsRoutes = [
    { path: ':id', component: BlogAdd },
    { path: 'add', component: BlogAdd },
    { path: 'categories', component: CategoriesBlog },
    { path: 'categories/add', component: CategoryBlogAdd },
    { path: 'categories/:id', component: CategoryBlogAdd },
  ];
  return (
    <Routes>
      <Route index element={<BlogsList />} />
      {blogsRoutes.map((route, index) => {
        const Page = route.component;
        return <Route key={index} path={route.path} element={<Page />} />;
      })}
    </Routes>
  );
}

export default blogRouter;
