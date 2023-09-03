import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from '../../component/element';
import { useSelector } from 'react-redux';

function ListBlogs() {
  const blogList = useSelector((state) => state.blogs);
  const [dataBlogs, setDataBlogs] = useState(blogList);

  console.log(import.meta.env.BASE_URL);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      render: (title, record) => <Link to={'/admin/blogs/' + record.id}>{title}</Link>,
    },
    {
      title: 'Author',
      dataIndex: 'author',
    },
    {
      title: 'Categories',
      dataIndex: 'categories',
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
              <Button title="Edit" class={'mr-10'} type="primary" />
            </Link>
            <Button title="Delete" onClick={() => handleDelete(record.id)} />
          </>
        );
      },
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  const handleDelete = (id) => {
    let newDataBlogs = dataBlogs.filter((item) => {
      return item.id !== id;
    });
    setDataBlogs(newDataBlogs);
  };

  return <Table type={'checkbox'} rowSelection={rowSelection} columns={columns} data={dataBlogs} />;
}

export default ListBlogs;
