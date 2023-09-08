import React, { useState, useEffect } from 'react';
import slugify from 'slugify';
import { Row, Col, Button, Checkbox, Form, Input, Select, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const { TextArea } = Input;
const { Option } = Select;

interface Form {
  title: string;

}

const BlogAdd: React.FC = () => {
  const [disableSlug, setDisableSlug] = useState(true);
  const [slugStatus, setSlugStatus] = useState('');
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log(values);
    form.resetFields();
    toast.success("Create Success!");
    return navigate('/admin/blogs');
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
    <Form
      name="form-blog"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      onFinish={onFinish}
      autoComplete="off"
      form={form}
      initialValues={{
        remember: true,
        status: 'Public',
      }}
    >
      <Row gutter={32}>
        <Col className="gutter-row" span={14}>
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
              <Button type="primary" className="mb-20" size="large" onClick={() => setSlugStatus('edit')}>
                Edit Slug
              </Button>
            ) : (
              <>
                <Button className="mb-20" size="large" onClick={() => setSlugStatus('complete')}>
                  Complete Edit Slug
                </Button>
                <Button type="text" className="mb-20" size="large" onClick={() => setSlugStatus('cancel')}>
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

          <Form.Item
            className="form-control"
            label="Excerpt"
            name="excerpt"
            rules={[
              {
                required: true,
                message: 'Please input your description!',
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={10}>
          <Form.Item name="status" label="Status" className="form-control">
            <Select size="large">
              <Option value="Public">Public</Option>
              <Option value="Pending">Pending</Option>
            </Select>
          </Form.Item>

          <Form.Item name="categories" label="Categories" className="form-control">
            <Checkbox.Group>
              <Space direction="vertical">
                <Checkbox value="A" style={{ lineHeight: '32px' }}>
                  F
                </Checkbox>
                <Checkbox value="B" style={{ lineHeight: '32px' }}>
                  F
                </Checkbox>
              </Space>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item
            className="form-control"
            label="Image Featured"
            name="image"
            rules={[
              {
                required: true,
                message: 'Please input your image link!',
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item className="form-control" label="Sticky" name="sticky" valuePropName="checked">
            <Checkbox>Sticky</Checkbox>
          </Form.Item>
          <Button type="primary" htmlType="submit" size="large" className="mt-20 w-100-percent">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default BlogAdd;
