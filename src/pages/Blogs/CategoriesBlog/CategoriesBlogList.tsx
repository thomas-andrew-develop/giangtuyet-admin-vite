import { Col, Row, Table, Button } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import type { ColumnsType } from 'antd/es/table';
import { useState, useEffect } from "react";

import { fetchCategoriesBlog } from '../../../redux/slice/categoriesBlog';

import ModalAddCategory from './CategoryBlogAdd';

interface DataType {
  key: string;
  title: string;
  categories: string[];
  excerpt: string;
  date: string;
}

function CategoriesBlogList() {
  const categories = useSelector((data: any) => data.categoriesBlog);
  const [categoriesBlog, setCategoriesBlog] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fetchCategories, setFetchCategories] = useState('');

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCategoriesBlog());
  }, [fetchCategories])

  useEffect(() => {
    if(categories.status === 'success') {
      setCategoriesBlog(categories.data)
    }
  }, [categories])

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onFinishForm = (data: any) => {
    if(data.id){
      setIsModalOpen(false);
      setFetchCategories(data.id);
    }
  }

  const columns: ColumnsType<DataType> = [
    {
      key: 'title',
      title: 'Title',
      dataIndex: 'title',
      render: (title) => title
    },
    {
      key: 'slug',
      title: 'Slug',
      dataIndex: 'slug',
    },
    {
      key: 'description',
      title: 'Description',
      dataIndex: 'description',
    },
    {
      key: 'date',
      title: 'Date Publish',
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

  const handleDelete = (id: any) => {
    console.log(id);
  };

  return <>
    <Row gutter={32}>
      <Col sm={16} offset={4}>
        <div className="mb-8 flex justify-end">
          <Button type="primary" onClick={showModal}>Add New Category</Button>
        </div>
        <Table
          rowSelection={{
            type: 'checkbox',
          }}
          rowKey="id"
          columns={columns}
          dataSource={categoriesBlog}
        />
        
      </Col>
    </Row>
    <ModalAddCategory isModalOpen={isModalOpen} onFinishForm={onFinishForm} closeModal={closeModal} />
  </>;
}

export default CategoriesBlogList;
