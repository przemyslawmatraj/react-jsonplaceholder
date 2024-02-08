import { useParams } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import { Layout, theme, Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

const Post = () => {
  const { id } = useParams();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const {
    data: post,
    isLoading: isLoadingPost,
    isError: isErrorPost,
  } = useAPI("posts", (data) =>
    data.filter((post) => post.id === parseInt(id || ""))
  );

  const {
    data: comments,
    isLoading: isLoadingComments,
    isError: isErrorComments,
  } = useAPI("comments", (data) =>
    data.filter((comment) => comment.postId === parseInt(id || ""))
  );

  const { data: user } = useAPI("users", (data) =>
    data.filter((user) => user.id === post?.[0]?.userId)
  );

  if (!id) {
    return <div>Invalid post id</div>;
  }

  return (
    <>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "20px",
        }}
      >
        {post && post.length > 0 ? post[0].title : "Post Title"}
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
          {isLoadingPost ? (
            <div>Loading...</div>
          ) : isErrorPost ? (
            <div>Error</div>
          ) : (
            post &&
            post.length > 0 && (
              <>
                <h3>Post made by {user?.[0].name}</h3>
                <div style={{ marginBottom: "26px" }}>
                  <p style={{ fontSize: "20px" }}>{post[0].body}</p>
                </div>
                <h3>Comments</h3>
                {isLoadingComments ? (
                  <div>Loading...</div>
                ) : isErrorComments ? (
                  <div>Error</div>
                ) : (
                  <Collapse
                    bordered={false}
                    expandIcon={({ isActive }) => (
                      <CaretRightOutlined rotate={isActive ? 90 : 0} />
                    )}
                    className="site-collapse-custom-collapse"
                    items={comments?.map((comment) => {
                      return {
                        key: comment.id,
                        label: comment.name,
                        children: (
                          <>
                            {comment.body}
                            <br />
                            <br />
                            Email: {comment.email}
                          </>
                        ),
                      };
                    })}
                  />
                )}
              </>
            )
          )}
        </div>
      </Content>
    </>
  );
};

export default Post;
