import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Menu } from "antd";
import useMenuItems from "../hooks/useMenuItems";

const { Sider, Footer } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { items, getSelectedKey } = useMenuItems();

  return (
    <Layout style={{ minHeight: "100svh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={getSelectedKey()}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Outlet />
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
