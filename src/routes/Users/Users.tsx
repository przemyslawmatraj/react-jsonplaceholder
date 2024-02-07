import { Layout, theme } from "antd";

const { Header, Content } = Layout;
const Users = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        Users
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
          All users
        </div>
      </Content>
    </>
  );
};

export default Users;
