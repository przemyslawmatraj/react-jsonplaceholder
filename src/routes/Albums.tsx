import { Layout, theme } from "antd";

const { Header, Content } = Layout;
const Albums = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        Albums
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
          All Albums
        </div>
      </Content>
    </>
  );
};

export default Albums;
