import { Layout, theme } from "antd";

const { Header, Content } = Layout;
const Posts = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        Posts
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
          All posts
        </div>
      </Content>
    </>
  );
};

export default Posts;
