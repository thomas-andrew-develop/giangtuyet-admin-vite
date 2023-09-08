import { Col, Row, Table, Button } from "antd";
import { Link } from "react-router-dom";
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  title: string;
  categories: string[];
  excerpt: string;
  date: string;
}

function CategoriesBlogList() {
  const dataCategoriesBlog: any = [];

  const columns: ColumnsType<DataType> = [
    {
      key: 'title',
      title: 'Title',
      dataIndex: 'title',
      render: (title, record: any) => <Link to={'/admin/blogs/' + record._id}>{title}</Link>
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
      render: (action: any, record: any) => {
        console.log(action)
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
    console.log(id)
  };

  return <>
    <Row gutter={32}>
      <Col sm={16} offset={4}>
        <Table
          rowSelection={{
            type: 'checkbox',
            // ...rowSelection,
          }}
          rowKey="id"
          columns={columns}
          dataSource={dataCategoriesBlog}
        />
      </Col>
    </Row>
  </>;
}

export default CategoriesBlogList;
