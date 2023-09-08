import { Col, Row, Table, Button } from "antd";
import { Link } from "react-router-dom";

function CategoriesBlogList() {
  const dataCategoriesBlog: any = [];

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      render: (title: string, record: {id: string}) => console.log(title, record),
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Date Publish',
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
