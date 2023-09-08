import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'antd';
import { fetchBlogs } from '../../redux/slice/blogs';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  title: string;
  categories: string[];
  excerpt: string;
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
    if(blogList.status === 'success') {
      setDataBlogs(blogList.blogs)
    }
  }, [blogList])
  
  const columns: ColumnsType<DataType> = [
    {
      key: 'title',
      title: 'Title',
      dataIndex: 'title',
      render: (title, record: any) => <Link to={'/admin/blogs/' + record.id}>{title}</Link>,
    },
    {
      key: 'categoriesid',
      title: 'Categories',
      dataIndex: 'categoriesid',
      render: (categories) =>  categories
    },
    {
      key: 'excerpt',
      title: 'Excerpt',
      dataIndex: 'excerpt',
      render: (excerpt) =>  excerpt
    },
    {
      key: 'date',
      title: 'Date',
      dataIndex: 'date',
    },
    {
      key: 'action',
      title: 'Action',
      dataIndex: 'action',
      render: (_, record: any) => {
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
    const newDataBlogs: any = dataBlogs.filter((item: any) => {
      return item.id !== id;
    });
    setDataBlogs(newDataBlogs);
  };

  return <Table
    rowSelection={{
      type: 'checkbox',
      // ...rowSelection,
    }}
    rowKey="id"
    columns={columns}
    dataSource={dataBlogs}
  />;
}

export default ListBlogs;
