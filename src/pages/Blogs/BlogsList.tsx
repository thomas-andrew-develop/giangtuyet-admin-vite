import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'antd';
import { fetchBlogs } from '../../redux/slice/blogs';

interface DataType {
  id: number;
  title: string;
  author: string;
  categories: string;
  date: string;
}

function ListBlogs() {
  const blogList: any = useSelector((data: any) => data.blogs);
  const [dataBlogs, setDataBlogs] = useState([]);
  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [])

  useEffect(() => {
    console.log('blogList',blogList);
    if(blogList.status === 'success') {
      setDataBlogs(blogList.blogs)
    }
  }, [blogList])
  
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      render: (title: string, record: {id: string}) => <Link to={'/admin/blogs/' + record.id}>{title}</Link>,
    },
    {
      title: 'Categories',
      dataIndex: 'categories_id',
      render: (categories: string) =>  categories
    },
        {
      title: 'Excerpt',
      dataIndex: 'excerpt',
      render: (excerpt: string) =>  excerpt
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (action, record) => {
        return (
          <>
            <Link to={'/admin/blogs/' + record.id}>
              <Button className={'mr-10'} type="primary">Edit</Button>
            </Link>
            <Button onClick={() => handleDelete(record.id)} type="primary" danger>Delete</Button>
          </>
        );
      },
    },
  ];

  // const rowSelection = {
  //   onChange: (selectedRowKeys, selectedRows) => {
  //     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  //   },
  // };

  const handleDelete = (id: any) => {
    const newDataBlogs: DataType[] = dataBlogs.filter((item) => {
      return item.id !== id;
    });
    setDataBlogs(newDataBlogs);
  };

  return <Table
    rowSelection={{
      type: 'checkbox',
      // ...rowSelection,
    }}
    rowKey="_id"
    columns={columns}
    dataSource={dataBlogs}
  />;
}

export default ListBlogs;
