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
        label: 'List Categories',
        key: '/admin/blogs/categories',
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
        label: 'List Categories',
        key: '/admin/products/categories',
      },
    ],
  },
  {
    label: 'Sign Out',
    key: 'signout',
    icon: <LogoutOutlined />,
  },
];

export const keysOpenMenu = ['blogs', 'products'];
