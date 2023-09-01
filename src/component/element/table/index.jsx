import React from 'react';
import { Table } from 'antd';

function TableCustom({ type, rowSelection, columns, data }) {
  return (
    <Table
      rowSelection={{
        type: type,
        rowSelection,
      }}
      columns={columns}
      dataSource={data}
    />
  );
}

export default TableCustom;
