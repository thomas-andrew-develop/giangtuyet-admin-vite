import React, { useState, useEffect } from 'react';
import slugify from 'slugify';
import { Button, Form, Input, Space, Modal } from 'antd';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


import { addCategoryBlog } from '../../../redux/slice/categoriesBlog';

const { TextArea } = Input;

const CategoryBlogAdd: React.FC<any> = (props: any) => {
  const [disableSlug, setDisableSlug] = useState(true);
  const [slugStatus, setSlugStatus] = useState('');
  
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleCancel = () => {
    props.closeModal(false);
  };

  const onFinish = (data: any) => {
    data.id = uuidv4();
    dispatch(addCategoryBlog(JSON.stringify(data)))
    form.resetFields();
    toast.success("Create Success!");
    props.onFinishForm(data);
    setConfirmLoading(false);
  };

  const handleChange = (e: any) => {
    form.setFieldsValue({
      slug: slugify(e.target.value),
    });
  };

  const newSlug = Form.useWatch('slug', form);
  const oldSlug = Form.useWatch('title', form);
  useEffect(() => {
    switch (slugStatus) {
      case 'edit':
        setDisableSlug(false);
        break;
      case 'complete':
        form.setFieldsValue({
          slug: slugify(newSlug),
        });
        setDisableSlug(true);
        break;
      case 'cancel':
        form.setFieldsValue({
          slug: slugify(oldSlug),
        });
        setDisableSlug(true);
        break;
    }
  }, [slugStatus]);

  return (
    <Modal
      title={<h4 className='text-center font-bold'>Add New Category</h4>}
      open={props.isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        name="form-blog-category"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          className="form-control"
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: 'Please input your title!',
            },
          ]}
        >
          <Input size="large" onChange={handleChange}/>
        </Form.Item>

        <Form.Item
          className="form-control"
          label="Slug"
          name="slug"
          rules={[
            {
              required: true,
              message: 'Please input your slug!',
            },
          ]}
        >
          <Input disabled={disableSlug} size="large" />
        </Form.Item>
        <Space size={16}>
          {disableSlug ? (
            <Button type="primary" className="mb-4" size="large" onClick={() => setSlugStatus('edit')}>
              Edit Slug
            </Button>
          ) : (
            <>
              <Button className="mb-4" size="large" onClick={() => setSlugStatus('complete')}>
                Complete Edit Slug
              </Button>
              <Button type="text" className="mb-4" size="large" onClick={() => setSlugStatus('cancel')}>
                Cancel
              </Button>
            </>
          )}
        </Space>

        <Form.Item
          className="form-control"
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: 'Please input your description!',
            },
          ]}
        >
          <TextArea rows={10} />
        </Form.Item>

        <Button type="primary" htmlType="submit" size="large" className="w-100-percent">
          Submit
        </Button>
      </Form>
    </Modal>
  );
}

export default CategoryBlogAdd;
