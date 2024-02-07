import { Layout, theme } from "antd";
import useAPI from "../../hooks/useAPI";

const { Header, Content } = Layout;
const Users = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { data: users, isLoading, isError } = useAPI("users");
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
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error</div>
          ) : (
            <ul>
              {users?.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )}
        </div>
      </Content>
    </>
  );
};

export default Users;
