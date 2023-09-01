import { Breadcrumb } from 'antd';
import React from 'react';

function BreadcrumbCustom({ items }) {
  return <Breadcrumb className="text-capitalize" items={items} />;
}

export default BreadcrumbCustom;
