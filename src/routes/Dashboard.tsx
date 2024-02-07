import { Layout, theme } from "antd";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;

const Dashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        Dashboard
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
          <h1>Dashboard</h1>
          <p>
            Welcome to the JsonplaceholderUI. This is a simple UI to demonstrate
            the use of the JSONPlaceholder API. Click on the links in the menu
            to see the different resources.
          </p>
          <ul>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </div>
      </Content>
    </>
  );
};

export default Dashboard;
