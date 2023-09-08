import { Breadcrumb } from 'antd';


function BreadcrumbCustom(items: any) {
  return <Breadcrumb className="text-capitalize" items={items} />;
}

export default BreadcrumbCustom;
