import React from 'react';
import { LayoutOutlined, BookOutlined, InboxOutlined, LogoutOutlined } from '@ant-design/icons';

export const menus = [
  {
    label: 'Dashboard',
    key: '/admin',
    icon: <LayoutOutlined />,
  },
  {
    label: 'Blogs',
    key: 'blogs',
    icon: <BookOutlined />,
    children: [
      {
        label: 'List Blogs',
        key: '/admin/blogs',
        to: '/admin/blogs',
      },
      {
        label: 'Add Blog',
        key: '/admin/blogs/add',
      },
      {
        label: 'Categories',
        key: 'categories-blog',
        children: [
          {
            label: 'List Categories',
            key: '/admin/blogs/categories',
          },
          {
            label: 'Add Category',
            key: '/admin/blogs/categories/add',
          },
        ],
      },
    ],
  },
  {
    label: 'Products',
    key: 'products',
    icon: <InboxOutlined />,
    children: [
      {
        label: 'List Products',
        key: '/admin/products',
      },
      {
        label: 'Add Product',
        key: '/admin/products/add',
      },
      {
        label: 'Categories',
        key: 'categories-product',
        children: [
          {
            label: 'List Categories',
            key: '/admin/products/categories',
          },
          {
            label: 'Add Category',
            key: '/admin/products/categories/add',
          },
        ],
      },
    ],
  },
  {
    label: 'Sign Out',
    key: 'signout',
    icon: <LogoutOutlined />,
  },
];
