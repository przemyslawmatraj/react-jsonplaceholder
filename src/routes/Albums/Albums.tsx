import { Layout, theme } from "antd";
import useAPI from "../../hooks/useAPI";

const { Header, Content } = Layout;
const Albums = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { data: albums, isLoading, isError } = useAPI("albums");

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
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error</div>
          ) : (
            <ul>
              {albums?.map((album) => (
                <li key={album.id}>{album.title}</li>
              ))}
            </ul>
          )}
        </div>
      </Content>
    </>
  );
};

export default Albums;
