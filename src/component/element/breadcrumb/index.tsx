import { Breadcrumb } from 'antd';


function BreadcrumbCustom(items: object) {
  return <Breadcrumb className="text-capitalize" items={items} />;
}

export default BreadcrumbCustom;
