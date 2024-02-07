import { Layout, theme } from "antd";

const { Header, Content } = Layout;

const Dashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        asdasd
      </Header>
      <Content style={{ margin: "0 16px" }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Bill is a cat.
        </div>
      </Content>
    </>
  );
};

export default Dashboard;
