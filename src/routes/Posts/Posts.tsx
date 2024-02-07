import { Layout, theme } from "antd";
import useAPI from "../../hooks/useAPI";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;
const Posts = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { data: posts, isLoading, isError } = useAPI("posts");

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
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error</div>
          ) : (
            <ul>
              {posts?.map((post) => (
                <li key={post.id}>
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Content>
    </>
  );
};

export default Posts;
