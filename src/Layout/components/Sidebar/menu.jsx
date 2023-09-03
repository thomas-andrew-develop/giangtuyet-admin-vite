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
        key: '/blogs',
        to: '/blogs',
      },
      {
        label: 'Add Blog',
        key: '/blogs/add',
      },
      {
        label: 'Categories',
        key: 'categories-blog',
        children: [
          {
            label: 'List Categories',
            key: '/blogs/categories',
          },
          {
            label: 'Add Category',
            key: '/blogs/categories/add',
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
        key: '/products',
      },
      {
        label: 'Add Product',
        key: '/products/add',
      },
      {
        label: 'Categories',
        key: 'categories-product',
        children: [
          {
            label: 'List Categories',
            key: '/products/categories',
          },
          {
            label: 'Add Category',
            key: '/products/categories/add',
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
