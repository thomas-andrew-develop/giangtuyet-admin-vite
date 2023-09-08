
import { Layout } from 'antd';
const { Header } = Layout;

function HeaderLayout({ colorBgContainer }: any) {
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    />
  );
}

export default HeaderLayout;
